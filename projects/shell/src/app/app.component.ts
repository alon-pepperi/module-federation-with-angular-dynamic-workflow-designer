import { Router } from '@angular/router';
import { AddonProxyComponent } from './plugins/addon-proxy.component';
import { AddonOptions } from './plugins/plugin';
import { Component, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { LookupService } from './plugins/lookup.service';
import { PepDialogService } from '@pepperi-addons/ngx-lib/dialog';
import { PepMenuItem } from '@pepperi-addons/ngx-lib/menu';

@Component({
  selector: 'addon-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AddonComponent implements OnInit {

  @ViewChild('dialogTemplate', { read: TemplateRef })
  textAreaDialogTemplate: TemplateRef<any>;
  plugins: AddonOptions[] = [];
  workflow: AddonOptions[] = [];
  showConfig = false;
  menuItemsDialog: Array<PepMenuItem> = [];
  menuItemsLoad: Array<PepMenuItem> = [];
  menuItemsNavigate: Array<PepMenuItem> = [];
  menuItems: Array<PepMenuItem> = [];
  dialogRef;
  dialogAddon;
  buttonPlugins;
  constructor(
    private lookupService: LookupService,
    private dialog: PepDialogService,
    private router: Router
    ) {
  }

  async ngOnInit(): Promise<void> {
    await this.lookupService.lookup().then( plugins => {
      plugins.forEach(p => {
        this.menuItemsNavigate.push({key: p.displayName, text: 'Navigate To ' + p.displayName });
        this.menuItemsDialog.push({key: p.displayName, text: 'Open ' + p.displayName + ' in Dialog' });
        this.menuItemsLoad.push({key: p.displayName, text: 'Load ' + p.displayName});
        this.plugins.push(p);

    });

    this.menuItemsNavigate = this.menuItemsNavigate.splice(4);
    this.menuItemsDialog = this.menuItemsDialog.splice(0,4);
    this.menuItemsLoad = this.menuItemsLoad.splice(0,4);
    this.menuItems = [...this.menuItemsNavigate, ...this.menuItemsLoad, ...this.menuItemsDialog]

    } );
  }

  openSubAddonAsDialog(plugin: AddonOptions): void {


    const config = this.dialog.getDialogConfig(
      { // maxWidth: '90vw', // maxHeight: '90vh'
      },
      'regular'
    );
    this.dialogRef = this.dialog.openDialog(this.textAreaDialogTemplate, { addon: plugin}, config);
    // dialogRef.componentInstance.options = plugin;


  }

  addSubAddonToPage(plugin: AddonOptions): void {
    this.workflow.push(plugin);
  }

  toggle(): void {
    this.showConfig = !this.showConfig;
  }

  closeDialog(data = null){
    this.dialogRef.close(data);
  }

  onMenuItemClicked(e){
    this.dialogAddon = this.plugins.filter(p => p.displayName === e.source.key)[0];

    if (e.source.text.indexOf('Navigate') > -1){
      this.router.navigate(['settings', this.dialogAddon.uuid, this.dialogAddon.path]);
    }
    else if (e.source.text.indexOf('Dialog') > -1){
      this.openSubAddonAsDialog(this.dialogAddon);
    }
    else if (e.source.text.indexOf('Load') > -1){
      this.addSubAddonToPage(this.dialogAddon);
    }
  }

}

