import Any = jasmine.Any;


export class Trigger {
    id: number;
    identificator: string;
    title: string;
    body: string;
    trigger_type: string;

    constructor(id = 0, identificator = '', title = '', body = '',trigger_type='') {
        this.id = id;
        this.identificator = identificator;
        this.title = title;
        this.body = body;
        this.trigger_type = trigger_type;
    }


}