import { Component, OnInit } from '@angular/core';
import { PrintBluetoothService } from '../service/printer.service';
import { Platform } from '@ionic/angular';
import { PrintContentService } from '../service/printcontent.service';


@Component({
  selector: 'app-printer-setting',
  templateUrl: './printer-setting.page.html',
  styleUrls: ['./printer-setting.page.scss'],
})
export class PrinterSettingPage implements OnInit {

  bluetoothList: any[];
  selectedPrinter:any;

  constructor(public platform: Platform, private printer: PrintBluetoothService, private contentService: PrintContentService ) { }

  listPrinter() { 
    this.printer.getBluetoothList()
     .then(resp=>{
      this.bluetoothList=resp;
     
  });
}
ngOnInit() {
  this.listPrinter();
  //this.printContent();
 
}

getBluetoothList(): void {
  this.bluetoothList = [];

  }

  selectPrinter(macAddress)
  {
    this.selectedPrinter= macAddress;
  }

}
