import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {Template} from '../../../model/Template';
import {TemplateService} from '../../../services/template.service';
import {User} from '../../../model/User';
import {Observable} from 'rxjs/Observable';
import {map, startWith} from 'rxjs/operators';

export interface StateGroup {
  letter: string;
  names: string[];
}

@Component({
  selector: 'app-add-test',
  templateUrl: './add-test.component.html',
  styleUrls: ['./add-test.component.css']
})
export class AddTestComponent implements OnInit {
  stateForm: FormGroup = this.fb.group({
    stateGroup: '',
  });
  stateGroups: StateGroup[] = [{
    letter: '1',
    names: ['A', 'B']
  }, {
    letter: 'C',
    names: ['California', 'Colorado', 'Connecticut']
  }, {
    letter: 'D',
    names: ['Delaware']
  }, {
    letter: 'F',
    names: ['Florida']
  }, {
    letter: 'G',
    names: ['Georgia']
  }, {
    letter: 'H',
    names: ['Hawaii']
  }, {
    letter: 'I',
    names: ['Idaho', 'Illinois', 'Indiana', 'Iowa']
  }, {
    letter: 'K',
    names: ['Kansas', 'Kentucky']
  }, {
    letter: 'L',
    names: ['Louisiana']
  }, {
    letter: 'M',
    names: ['Maine', 'Maryland', 'Massachusetts', 'Michigan',
      'Minnesota', 'Mississippi', 'Missouri', 'Montana']
  }, {
    letter: 'N',
    names: ['Nebraska', 'Nevada', 'New Hampshire', 'New Jersey',
      'New Mexico', 'New York', 'North Carolina', 'North Dakota']
  }, {
    letter: 'O',
    names: ['Ohio', 'Oklahoma', 'Oregon']
  }, {
    letter: 'P',
    names: ['Pennsylvania']
  }, {
    letter: 'R',
    names: ['Rhode Island']
  }, {
    letter: 'S',
    names: ['South Carolina', 'South Dakota']
  }, {
    letter: 'T',
    names: ['Tennessee', 'Texas']
  }, {
    letter: 'U',
    names: ['Utah']
  }, {
    letter: 'V',
    names: ['Vermont', 'Virginia']
  }, {
    letter: 'W',
    names: ['Washington', 'West Virginia', 'Wisconsin', 'Wyoming']
  }];

  stateGroupOptions: Observable<StateGroup[]>;

  constructor(public templService: TemplateService,
              private user: User,
              public newTemplate: Template,
              private fb: FormBuilder) {
    this.user = JSON.parse(localStorage.getItem('currentUser'));
  }

  maskAnswer = [/[А-Д]/];


  selectedNum: any;
  templates: any;


  NameFormControl = new FormControl('', [
    Validators.required,

  ]);
  NumberFormControl = new FormControl('', [
    Validators.required,
    Validators.max(12)
  ]);
  AnswerFormControl = new FormControl('', [
    Validators.required,
  ]);


  ngOnInit() {
    this.stateGroupOptions = this.stateForm.get('stateGroup')!.valueChanges
      .pipe(
        startWith(''),
        map(val => this.filterGroup(val))
      );
    this.getTemplates();
  }

  filterGroup(val: string): StateGroup[] {
    if (val) {
      return this.stateGroups
        .map(group => ({letter: group.letter, names: this._filter(group.names, val)}))
        .filter(group => group.names.length > 0);
    }

    return this.stateGroups;
  }

  private _filter(opt: string[], val: string) {
    const filterValue = val.toLowerCase();
    return opt.filter(item => item.toLowerCase().startsWith(filterValue));
  }

  addTemplate() {
    this.newTemplate.idTeacher = this.user.idUser;
    this.templService.addTemplate(this.newTemplate).subscribe(data => {
      this.getTemplates();
    });
  }

  getTemplates() {
    this.templService.getTemplates(this.user).subscribe(data => {
      this.templates = data;
    });
  }


}


