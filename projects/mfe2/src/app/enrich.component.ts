import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'mfe2-enrich',
    template: `
        <div class="task">
            <img src="http://localhost:3001/assets/enrich.png">
            <p>Enrich</p>
        </div>
    `,
    styles: [`img { max-width: 100px;}`]
})

export class EnrichComponent implements OnInit {
    constructor() { }

    ngOnInit() { }
}
