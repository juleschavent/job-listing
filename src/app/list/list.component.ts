import { Component, OnInit } from '@angular/core';
import data from '../../assets/json/data.json';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
})
export class ListComponent implements OnInit {
  // set a new array that takes all the data from our json file
  listItem = data;
  // create a bool that give the option to modify what the method does
  isFiltered = false;
  // create an array that show tags you've clicked
  filters: string[] = [];
  // create a bool that give the option to modify the display
  isListed = false;

  // Methode with an argument that will be defined in HTML
  filter(el: any) {
    // set a temporary array to store the new list
    let tempList = [];
    // push the clicked tag to the filters array. It will be use for display in HTML
    this.filters.push(el);
    // set a on/off to tell if there is no filter use
    this.isFiltered = true;

    // loop on every element of the current list
    for (const element of this.listItem) {
      // if the html argument (el) is equal to the value of the key (role)
      if (el === element.role) {
        // then push to the temporary list the element
        tempList.push(element);
      }
      // if the html argument (el) is equal to the value of the key (level)
      if (el === element.level) {
        // then push to the temporary list the element
        tempList.push(element);
      }
      // loop on every element of the current key (languages)
      for (let lang of element.languages) {
        // if the html argument (el) is equal to the value of element (lang)
        if (el === lang) {
          // then push to the temporary list the element
          tempList.push(element);
        }
      }
      // loop on every element of the current key (tools)
      for (let tool of element.tools) {
        // if the html argument (el) is equal to the value of element (tool)
        if (el === tool) {
          // then push to the temporary list the element
          tempList.push(element);
        }
      }
    }
    // finally set the current list equal to the temp list
    this.listItem = tempList;
    window.scrollTo(0, 0);
  }

  // methode that remove a tag and update the list accordingly
  removeTag(tag: any) {
    // creat a tomporary list to work with
    let tempList = [];
    // creat a variable to simplify the use of indexOf()
    let tagIndex = this.filters.indexOf(tag);

    // remove clicked tag from filter list & if list is empty then run the method clearFilters()
    this.filters.splice(tagIndex, 1);
    if (this.filters[0] === undefined) {
      this.clearFilters();
    } 
    // if list is not empty
    else {
      // loop on every tags in the filter array
      for (const tag of this.filters) {
        // loop on every object of our main json file
        for (const obj of data) {
          // if the tag we are removing (meaning we want to show object that didn't have this tag) is equal to any of the key value of our current object
          if (
            tag === obj.role ||
            tag === obj.level ||
            tag === obj.languages[0] ||
            tag === obj.languages[1] ||
            tag === obj.languages[2] ||
            tag === obj.tools[0] ||
            tag === obj.tools[1]
          ) {
            // then push this object to our temporary list
            tempList.push(obj);
          }
        }
      }
      // finally, copy the tomporary list onto the real list
      this.listItem = tempList;
    }
  }

  // a method that reset the list
  clearFilters() {
    // nothing is filtered
    this.isFiltered = false;
    // so filters array is empty
    this.filters = [];
    // so list is equal to our main json file
    this.listItem = data;
  }

  // Methode that switch when the type of display is changed
  displayType() {
    this.isListed = !this.isListed;
    console.log(this.isListed);
  }

  constructor() {}

  ngOnInit(): void {}
}

