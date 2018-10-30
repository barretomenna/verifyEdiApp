export default class Log {
    status: string;
    arquivo: string;
    stacktrace: string;
    dh_registro: Date;

    constructor(status?: string, arquivo?: string, stacktrace?: string, dh_registro?: Date) {
        this.status = status || '';
        this.arquivo = arquivo || '';
        this.stacktrace = stacktrace || '';
        this.dh_registro = dh_registro || new Date();
    }
}