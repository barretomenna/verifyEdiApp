import { Component, OnInit, OnDestroy } from '@angular/core';
import { EdiService } from '../../../services/edi.service';
import { HubConnection, HubConnectionBuilder } from '@aspnet/signalr';
import Log from '../../../entidades/log';

@Component({
  selector: 'app-edi',
  templateUrl: './edi.component.html',
  styleUrls: ['./edi.component.scss'],
  providers: [EdiService]
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
    private _ediService: EdiService
  ) { }

  ngOnInit() {
    this.logs = new Array<Log>();
    this.files = new Array<string>();
    this.statusServer = true;
    this.startSocket();
  }

  ngOnDestroy(): void {
    clearInterval(this.requestTimer);
  }

  async searchFiles() {
    this.files = await this._ediService.getFilesInPath(this.path);
    this.showProgress = this.logs.length > 0;
    this.haveFiles = this.files.length > 0;
  }

  async startVerify() {
    clearInterval(this.requestTimer);
    this.startLogControl();
    this.Checking = true;
    this.Checking = await this._ediService.verifiFiles(this.files, this.path);

  }

  private async startSocket() {
    this.connection = new HubConnectionBuilder()
      .withUrl('http://localhost:5000/loghub')
      .build();


    await this.connection.on('RecieveLog', data => {
      this.logs = this.addLog(data);
    });

    await this.connection.start().then(resp => {
      this.statusServer = true;
    }, err => {
      this.statusServer = false;
    });

    this.connection.invoke('SendInfo', null).then(data => {
      this.logs = this.addLog(data);
    });

  }

  private startLogControl() {
    this.requestTimer = setInterval(() => {
      this.connection.invoke('SendInfo', null).then(data => {
        this.logs = this.addLog(data);
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
