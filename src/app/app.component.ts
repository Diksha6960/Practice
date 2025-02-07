import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Practice';

  data: any[] = [
    {
    "id": 997,
    "ruleName": "2DS - Trace Changes",
    "active": "Y",
    "type": "Match",
    "subType": "2DS - Trace Changes",
    "domain": "",
    "impacted": 0,
    "favourite": "N",
    "scheduled": "Y",
    "lastScheduledDate": "01-May-2024 01:15 PM",
    "alert": "Y"
    },
    {
    "id": 996,
    "ruleName": "Trace Changes",
    "active": "Y",
    "type": "Match",
    "subType": "2DS - Trace Changes",
    "domain": "",
    "impacted": 0,
    "favourite": "N",
    "scheduled": "N",
    "lastScheduledDate": "01-May-2024 01:15 PM",
    "alert": "N"
    },
    {
    "id": 986,
    "ruleName": "File Monitor",
    
    "active": "Y",
    "type": "Match",
    "subType": "1DS - File Monitor",
    "domain": "",
    "impacted": 57994,
    "favourite": "N",
    "scheduled": "Y",
    "lastScheduledDate": "01-May-2024 01:15 PM",
    "alert": "Y"
    },
    {
    "id": 985,
    "ruleName": "testreve1",
    "active": "Y",
    "type": "Match",
    "subType": "1DS - File Monitor",
    "domain": "",
    "impacted": 13773,
    "favourite": "N",
    "scheduled": "N",
    "lastScheduledDate": "01-May-2024 01:15 PM",
    "alert": "N"
    }
    ]
    
    // Funtion to add new data object 
    onAdd(){
      const obj = {
        "id":"" ,
    "ruleName": "",
    "active": "",
    "type": "",
    "subType": "",
    "domain": "",
    "impacted": "",
    "favourite": "",
    "scheduled": "",
    "lastScheduledDate": "",
    "alert": ""
      }
      this.data.unshift(obj)
    }
    
    // Function to Edit the record
    // On click of update editable row of record will visible 
    onEdit(dataObj:any){
      this.data.forEach(element => {
        element.isEdit = false
      })
      dataObj.isEdit = true
    }
    
    // Funtion to Save Updated Data
    // In console the edited data object will be printed
    onCancel(obj:any){
      obj.isEdit = false
    console.log(obj)
    }
    
    // Sorting functionality in ascending and descebding order
    public sortDataDesc(): void {
      this.data = this.data.sort((a, b) => a.id - b.id);
    }
    
    public sortDataAsc() {
      this.data = this.data.sort((a, b) => b.id - a.id);
    }
    // Filter functionality by RuleName Property
    // Enter full RuleName to test
    filterBy(nameInput: HTMLInputElement) {
      if (nameInput.value) {
        this.data = this.data.filter(p => p.ruleName === nameInput.value)
      }
    }
}
