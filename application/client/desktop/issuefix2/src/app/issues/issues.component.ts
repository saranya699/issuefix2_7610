import { Component, OnInit } from '@angular/core';
import { IssuesService } from './issues.service';

@Component({
  selector: 'app-issues',
  templateUrl: './issues.component.html',
  styleUrls: ['./issues.component.scss'],
})

export class IssuesComponent implements OnInit {

    constructor (
        private issuesService: IssuesService,
    ) { }

    ngOnInit() {
    }
}