import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-search-panel',
  templateUrl: './search-panel.component.html',
  styleUrls: ['./search-panel.component.scss'],
})
export class SearchPanelComponent implements OnInit {
  @Input() query: string;

  @Output() searchQuery = new EventEmitter();

  form: FormGroup;

  constructor() {
    this.initForm();
  }

  ngOnInit(): void {
    this.setQuery();
  }

  /**
   * Initial form setup
   */
  initForm() {
    this.form = new FormGroup({
      query: new FormControl('', []),
    });
  }

  /**
   * This will set the query coming as input
   */
  setQuery() {
    if (this.query) {
      this.form.patchValue({ query: this.query });
    }
  }

  /**
   *  This will emit the query searched
   */
  onSearchPlayer() {
    const { query } = this.form.value;
    this.searchQuery.emit(query.toLowerCase());
  }
}
