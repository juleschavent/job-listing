import { Component, OnInit } from '@angular/core';
import data from '../../assets/json/data.json';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
})
export class ListComponent implements OnInit {
  //Set a new array that takes all the data from our json file
  listItem = data;
  // create a bool that give the option to modify what the method does
  isFiltered = false;
  // create an array that show tags you've clicked
  filters: string[] = [];

  // create a method that display the right array when you remove a tag from filter
  removeRole(tag: any) {
    // variable is equal to the index of tag
    let tagIndex = this.filters.indexOf(tag);
    // indexOf return -1 if it doesn't exist on the array, so if it's not equal to -1 it means it exists
    if (tagIndex != -1) {
      // remove the tag at the current index from the filters array
      this.filters.splice(tagIndex, 1);

      // loop on every object of the main json file
      for (const obj of data) {
        // if object.role isn't the same as the removed tag
        if (obj.role != tag) {
          // then push to the list the object
          this.listItem.push(obj);
          console.log(obj);
        }

        // if object.level isn't the same as the removed tag
        if (obj.level != tag) {
          // then push to the list the object
          this.listItem.push(obj);
          console.log(obj);
        }

        // if object.languages isn't the same as the removed tag
        if (obj.languages != tag) {
          // then push to the list the object
          this.listItem.push(obj);
          console.log(obj);
        }
      }
    }
    // if the first item ot the array is undefined meaning it's empty
    if (this.filters[0] === undefined) {
      // then run the clearFilters() method
      this.clearFilters();
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

  constructor() {}

  ngOnInit(): void {}
}

//OLD CODE

// //Set a methode that filter by level
// filterLevel(el: any) {
//   let tempList = [];
//   if (this.isFiltered === false) {
//     for (const item of this.listItem) {
//       if (item.level == el) {
//         tempList.push(item);
//       }
//     }
//   } else {
//     tempList = data;
//   }
//   this.listItem = tempList;
//   this.isFiltered = !this.isFiltered;
// }

//Set a methode that filter by language
// filterLang(el: any) {
//   let tempList = [];
//   if (this.isFiltered === false) {
//     for (const item of this.listItem) {
//       for (const lang of item.languages) {
//         if (lang == el) {
//           tempList.push(item);
//         }
//       }
//     }
//   } else {
//     tempList = data;
//   }
//   this.listItem = tempList;
//   this.isFiltered = !this.isFiltered;
// }

// //Set a methode that filter by tool
// filterTool(el: any) {
//   let tempList = [];
//   if (this.isFiltered === false) {
//     for (const item of this.listItem) {
//       for (const tool of item.tools) {
//         if (tool == el) {
//           tempList.push(item);
//         }
//       }
//     }
//   } else {
//     tempList = data;
//   }
//   this.listItem = tempList;
//   this.isFiltered = !this.isFiltered;
// }




//____________________PREVIOUS FILTER METHOD____________________________//

// //Set a methode that filter by role with an argument
// filterRole(el: any) {
//   // create an empty array to store the new list
//   let tempList = [];
//   // for every item of the current list
//   for (const item of this.listItem) {
//     // if this item has the same property/name as the argument
//     if (item.role == el) {
//       // push item to the temporary array
//       tempList.push(item);
//     }
//   }
//   // set the final list to be equal to the temporary list
//   this.listItem = tempList;
//   // push the element that is clicked to filters array
//   this.filters.push(el);
//   // set to true to display in HTML
//   this.isFiltered = true;
// }

// //Set a methode that filter by level
// filterLevel(el: any) {
//   let tempList = [];
//   for (const item of this.listItem) {
//     if (item.level == el) {
//       tempList.push(item);
//     }
//   }
//   this.listItem = tempList;
//   this.filters.push(el);
//   this.isFiltered = true;
// }

// //Set a methode that filter by language
// filterLang(el: any) {
//   let tempList = [];
//   for (const item of this.listItem) {
//     for (const lang of item.languages) {
//       if (lang == el) {
//         tempList.push(item);
//       }
//     }
//   }
//   this.listItem = tempList;
//   this.filters.push(el);
//   this.isFiltered = true;
// }

// //Set a methode that filter by tool
// filterTool(el: any) {
//   let tempList = [];
//   for (const item of this.listItem) {
//     for (const tool of item.tools) {
//       if (tool == el) {
//         tempList.push(item);
//       }
//     }
//   }
//   this.listItem = tempList;
//   this.filters.push(el);
//   this.isFiltered = true;
// }