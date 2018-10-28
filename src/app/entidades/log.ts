export default class Log {
    id: string;
    arquivo: string;
    stacktrace: string;
    dh_registro: Date;

    constructor(id?: string, arquivo?: string, stacktrace?: string, dh_registro?: Date) {
        this.id = id || '';
        this.arquivo = arquivo || '';
        this.stacktrace = stacktrace || '';
        this.dh_registro = dh_registro || new Date();
    }
}