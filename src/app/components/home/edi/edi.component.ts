import { Component, OnInit, OnDestroy } from '@angular/core';
import { EdiService } from '../../../services/edi.service';
import { HubConnection, HubConnectionBuilder } from '@aspnet/signalr';
import Log from '../../../entidades/log';
import { AlertService } from '../../../services/alert.service';

@Component({
  selector: 'app-edi',
  templateUrl: './edi.component.html',
  styleUrls: ['./edi.component.scss'],
  providers: [EdiService, AlertService]
})
export class EdiComponent implements OnInit, OnDestroy {

  item: any;
  path: string;
  files: Array<string>;
  logs: Array<Log>;
  requestTimer: NodeJS.Timer;
  connection: HubConnection;
  showProgress: boolean;
  Checking: boolean;
  haveFiles: boolean;
  statusServer: boolean;

  constructor(
    private _ediService: EdiService,
    private _alertService: AlertService
  ) { }

  ngOnInit() {
    this.logs = new Array<Log>();
    this.files = new Array<string>();
    this.startSocket();
    this.startLogControl();
    this.statusServer = true;
  }

  ngOnDestroy(): void {
    clearInterval(this.requestTimer);
  }

  async searchFiles() {
    this.files = await this._ediService.getFilesInPath(this.path);
    this.haveFiles = this.files.length > 0;
  }

  async startVerify() {
    clearInterval(this.requestTimer);
    this.startLogControl();
    this.Checking = true;
    this.Checking = await this._ediService.verifiFiles(this.files, this.path);
  }

  reconect() {
    this.connection.start().then(
      resp => {
        this._alertService.successAlert('Conectado', 'Conexão aberta com o servidor');
        this.statusServer = true;
      }).catch(
        err => {
          this._alertService.erroAlert('Erro', 'Problema ao realizar a conexão com o servidor, verifique se esta tudo ok');
          this.statusServer = false;
        });
  }

  private async startSocket() {
    this.connection = new HubConnectionBuilder()
      .withUrl('http://localhost:5000/loghub')
      .build();


    await this.connection.on('RecieveLog', data => {
      this.logs = this.addLog(data);
      console.log(data);
    });

    await this.connection.start().then(resp => {
      this.statusServer = true;
    }, err => {
      this.statusServer = false;
    });
  }

  private startLogControl() {
    this.requestTimer = setInterval(() => {
      this.connection.invoke('SendInfo', null).then(data => {
        this.logs = this.addLog(data);
        this.showProgress = this.Checking = this.logs.length > 0;
      });
    }, 1200);
  }

  private addLog(log) {
    let newlog = [...this.logs];
    if (log !== null && log !== undefined && this.logs.length < log.length) {
      newlog = log;
      return newlog;
    }
    return this.logs;
  }

}
