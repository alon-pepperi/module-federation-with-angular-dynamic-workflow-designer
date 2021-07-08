import { TranslateLoader, TranslateService, TranslateStore } from '@ngx-translate/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { ChangeDetectorRef, Compiler, Component, ComponentFactoryResolver, ComponentRef, EventEmitter, InjectionToken, Injector, Input, NgModuleFactory, NgZone, OnInit, Output, SimpleChanges, TemplateRef, ViewChild, ViewChildren, ViewContainerRef, ViewEncapsulation } from '@angular/core';
import { MatDialog, MatDialogModule, MatDialogRef, MatDialogTitle } from '@angular/material/dialog';
import { MatMenuModule } from '@angular/material/menu';
// import { PepAddonService, PepFileService } from '@pepperi-addons/ngx-lib';
import { PepMenuItem } from '@pepperi-addons/ngx-lib/menu';
import { MAT_MENU_SCROLL_STRATEGY } from '@angular/material/menu';
import { Overlay, BlockScrollStrategy , ScrollStrategy } from '@angular/cdk/overlay';
import { UploadComponent } from './../upload.component';
import { NgModule } from '@angular/core';
import { CommonModule, Location } from '@angular/common';
import { PepUIModule } from '../modules/pepperi.module';
import { MaterialModule } from '../modules/material.module';
import { ActivatedRoute, Router, RouterModule, Routes } from '@angular/router';
import { MultiTranslateHttpLoader } from 'ngx-translate-multi-http-loader';
import { ReactiveFormsModule ,FormsModule } from '@angular/forms';
import {
    PepNgxLibModule,
    PepAddonService,
    PepCustomizationService,
    PepFileService,
    FIELD_TYPE,
    ObjectSingleData,
    PepFieldData,
    PepRowData,
    PepHttpService,
    PepDataConvertorService,
    IPepFieldValueChangeEvent,
} from '@pepperi-addons/ngx-lib';
import { PepAttachmentModule } from '@pepperi-addons/ngx-lib/attachment';
import { PepButtonModule } from '@pepperi-addons/ngx-lib/button';
import { PepCarouselModule } from '@pepperi-addons/ngx-lib/carousel';
import { PepCheckboxModule } from '@pepperi-addons/ngx-lib/checkbox';
import { PepColorModule } from '@pepperi-addons/ngx-lib/color';
import { PepDateModule } from '@pepperi-addons/ngx-lib/date';
import { PepGroupButtonsModule } from '@pepperi-addons/ngx-lib/group-buttons';
import { PepImageModule } from '@pepperi-addons/ngx-lib/image';
import { PepImagesFilmstripModule } from '@pepperi-addons/ngx-lib/images-filmstrip';
import { PepQuantitySelectorModule } from '@pepperi-addons/ngx-lib/quantity-selector';
import { PepRichHtmlTextareaModule } from '@pepperi-addons/ngx-lib/rich-html-textarea';
import { PepSearchModule } from '@pepperi-addons/ngx-lib/search';
import { PepSelectComponent, PepSelectModule } from '@pepperi-addons/ngx-lib/select';
import { PepSeparatorModule } from '@pepperi-addons/ngx-lib/separator';
import { PepSideBarModule } from '@pepperi-addons/ngx-lib/side-bar';
import { PepSignatureModule } from '@pepperi-addons/ngx-lib/signature';
import { PepSizeDetectorModule } from '@pepperi-addons/ngx-lib/size-detector';
import { PepTextareaModule } from '@pepperi-addons/ngx-lib/textarea';
import { PepTextboxModule } from '@pepperi-addons/ngx-lib/textbox';
import { PepListComponent, PepListModule } from '@pepperi-addons/ngx-lib/list';
import { PepMenuModule } from '@pepperi-addons/ngx-lib/menu';
import { PepTopBarModule } from '@pepperi-addons/ngx-lib/top-bar';

import { PepFormModule } from '@pepperi-addons/ngx-lib/form';
import {PortalModule} from '@angular/cdk/portal';
import { PepSmartFiltersModule } from '@pepperi-addons/ngx-lib/smart-filters';
import { PepRemoteLoaderModule } from '@pepperi-addons/ngx-remote-loader';
import {
    PepIconModule,
    PepIconRegistry,
    pepIconSystemBolt,
    pepIconNoImage,
    pepIconArrowTwoWaysVerT,
    pepIconArrowDown,
    pepIconArrowUp,
    pepIconArrowRightAlt,
    pepIconArrowLeftAlt,
    pepIconArrowDownAlt,
    pepIconArrowUpAlt,
    pepIconNumberNumber,
    pepIconNumberPlus,
    pepIconSystemBin,
    pepIconSystemEdit,
    pepIconSystemClose,
    pepIconSystemFilter,
    pepIconSystemMenu,
    pepIconSystemHome,
    pepIconSystemSettings,
    pepIconSystemQuestion,
    pepIconSystemAvatar,
    pepIconSystemDoor,
    pepIconSystemPrint,
    pepIconSystemSearch,
    pepIconSystemSpinner,
    pepIconSystemInfo,
    pepIconShoppingCart,
    pepIconTimeCal,
    pepIconViewCardLg,
    pepIconViewCardMd,
    pepIconViewCardSm,
    pepIconViewTable,
    pepIconViewMatrix,
    pepIconViewLine
} from '@pepperi-addons/ngx-lib/icon';

export type AddonOptions = LoadRemoteModuleOptions & {
  displayName: string;
  componentName: string;
  useModule?: boolean;
  uuid?: string;
  path?: string;
};
const pepIcons = [
    pepIconSystemBolt,
    pepIconNoImage,
    pepIconArrowTwoWaysVerT,
    pepIconArrowDown,
    pepIconArrowUp,
    pepIconArrowRightAlt,
    pepIconArrowLeftAlt,
    pepIconArrowDownAlt,
    pepIconArrowUpAlt,
    pepIconNumberNumber,
    pepIconNumberPlus,
    pepIconSystemBin,
    pepIconSystemEdit,
    pepIconSystemClose,
    pepIconSystemFilter,
    pepIconSystemMenu,
    pepIconSystemHome,
    pepIconSystemSettings,
    pepIconSystemQuestion,
    pepIconSystemAvatar,
    pepIconSystemDoor,
    pepIconSystemPrint,
    pepIconSystemSearch,
    pepIconSystemSpinner,
    pepIconSystemInfo,
    pepIconShoppingCart,
    pepIconTimeCal,
    pepIconViewCardLg,
    pepIconViewCardMd,
    pepIconViewCardSm,
    pepIconViewTable,
    pepIconViewMatrix,
    pepIconViewLine,
];

const pepperiComponentsModules = [
    PepAttachmentModule,
    PepCarouselModule,
    PepButtonModule,
    PepCheckboxModule,
    PepColorModule,
    PepDateModule,
    PepGroupButtonsModule,
    PepImageModule,
    PepImagesFilmstripModule,
    PepListModule,
    PepCheckboxModule,
    PepQuantitySelectorModule,
    PepRichHtmlTextareaModule,
    PepSearchModule,
    PepSelectModule,
    PepSeparatorModule,
    PepSideBarModule,
    PepSignatureModule,
    PepSizeDetectorModule,
    PepTextareaModule,
    PepTextboxModule,
    PepIconModule,
    PepMenuModule,
    PepTopBarModule,
    PepSmartFiltersModule,
    PepFormModule
];

import {
    TranslateModule,
    // TranslateLoader,
    // TranslateService,
} from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { PepDialogService } from '@pepperi-addons/ngx-lib/dialog';
import { SharedModule } from '../shared/shared.module';
import { loadRemoteModule, LoadRemoteModuleOptions } from '@angular-architects/module-federation';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelect, MatSelectChange, MatSelectModule } from '@angular/material/select';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
// import { MultiTranslateHttpLoader } from 'ngx-translate-multi-http-loader';

@Component({
  selector: 'mfe1-download',
  template: `

     <div class="addon-page-container">
     <pep-top-bar [title]="'addon top bar'" [inline]="topBarInline">
            <div header-end-content>
                <button class="pep-button weak sm spacing-element">
                    button
                </button>
                <pep-button [value]="'test 1'" [sizeType]="'sm'" [styleType]="'regular'"
                    [classNames]="'spacing-element '"></pep-button>
                <pep-button [value]="'test 2'" [sizeType]="'sm'" [classNames]="'spacing-element '"
                    [iconName]="'system_settings'">
                </pep-button>
            </div>
            <pep-list-actions *ngIf="showListActions" (stateChange)="onActionsStateChanged($event);" (actionClick)="onMenuItemClicked($event)" [actions]="menuItems"></pep-list-actions>

      </pep-top-bar>
      <div class="main-content">
        <div class="content">

        <div style="height: 200px; overflow: auto;" class="list-wrapper" #listContainer>
              <pep-list
                  [firstFieldAsLink]="false"
                  [isReport]="true"
                  [supportSorting]="true"
                  [supportResizing]="false"
                  [selectionTypeForActions]="'single'"
                  [noDataFoundMsg]="'No data'"
                  [parentScroll]="listContainer"
                  (selectedItemsChange)="selectedRowsChanged($event);">
              </pep-list>
            </div>
        <div class="grid-container">
  <!-- <pep-separator class="spacing-element" [key]="'sep1'"  [label]="'Sub-Addon separator'"></pep-separator> -->



  <div class="left-side">
  <button mat-button [matMenuTriggerFor]="menu" #menuTrigger="matMenuTrigger"
         (click)="detectChanges()"
         (menuClosed)="detectChanges()">Menu</button>
        <mat-menu #menu>
          <button mat-menu-item>Item 1</button>
          <button mat-menu-item>Item 2</button>
        </mat-menu>
          <!-- <form [formGroup]="group">
            <mat-form-field>
               <mat-placeholder>Start DateTime</mat-placeholder>
               <mat-datetimepicker-toggle [for]="datetimePicker" matSuffix>
               </mat-datetimepicker-toggle>
               <mat-datetimepicker #datetimePicker
                (closed)="detectChanges();"
                 type="datetime" openOnFocus="true" timeInterval="5">
               </mat-datetimepicker>
               <input  matInput  formControlName="datetimeCtrl"
                [matDatetimepicker]="datetimePicker"
                 required  autocomplete="false">
             </mat-form-field>
          </form> -->
  <!-- <h4>Basic mat-select</h4>
          <mat-form-field appearance="fill">
            <mat-select (selectionChange)="onSelectionChange($event);">
              <mat-option *ngFor="let food of foods" [value]="food.value">
                {{food.viewValue}}
              </mat-option>
            </mat-select>
          </mat-form-field> -->
      <pep-checkbox class="spacing-element" [key]="'cb1'"  (valueChange)="onValueChanged($event)"
              [label]="'Pepperi Checkbox'" [value]="'true'" [xAlignment]="'left'"
            >
            </pep-checkbox>
            <pep-textbox class="spacing-element" [key]="'int'" [label]="'Pepperi int'" [type]="'int'" [xAlignment]="'left'"
            (valueChange)="onValueChanged($event)"  [value]="'20302'" [required]="true">
            </pep-textbox>
            <!-- <pep-menu class="spacing-element pull-right flip" [xPosition]="'before'" [sizeType]="'md'" [styleType]="'weak'"
                            [items]="menuItems"
                           >
            </pep-menu> -->
            <pep-button class="spacing-element" [value]="'Pep Sub-Addon 1'"></pep-button>
            <!-- <pep-date class="spacing-element" [key]="'dateTime'" [label]="'Pepperi Date Time'" [type]="'datetime'"
                    [value]="'1-1-2020 12:00'" [xAlignment]="'left'" (valueChange)="onValueChanged($event)">
                </pep-date> -->
            <pep-quantity-selector class="spacing-element" [key]="'qs2'"
            [label]="'Pepperi Quantity Selector 1'" [type]="'button'"
                [value]="'55'" [xAlignment]="'left'">
            </pep-quantity-selector>
            <!-- <pep-attachment class="spacing-element" [key]="'attachment1'" [label]="'Pepperi Attachment'"
                            [xAlignment]="'center'" [rowSpan]="2" >
            </pep-attachment> -->
          </div>
  <div class="right-side">
    <!-- <pep-signature class="spacing-element" [key]="'sig1'"
                          [src]="'https://i.ibb.co/VMHwLkm/58957776-8700-4c6a-b9bc-a171b84d8080.png'"
                          [label]="'Pepperi Signature'" [xAlignment]="'center'" [rowSpan]="4"
                          (valueChange)="onValueChanged($event)">
            </pep-signature>
            <pep-image class="spacing-element" [key]="'Image'" [label]="'Pepperi Image'"
                       [xAlignment]="'center'" [rowSpan]="1" [disabled]="true"
                       [src]="'https://idpfiles.sandbox.pepperi.com/f389fd2e-4a31-4965-a21e-3a98b4553300/images/logo.svg'"
                       (valueChange)="onValueChanged($event)" >
            </pep-image>
            <pep-rich-html-textarea class="spacing-element"  [key]="'richText1'" [label]="'Pepperi Rich Html Textarea'" [value]="'<div><b>rich text</b> html area</div>'"
                   [rowSpan]="3" [maxFieldCharacters]="300" [xAlignment]="'left'" [disabled]="false">
            </pep-rich-html-textarea> -->
            <!-- <pep-images-filmstrip [objectId]="'Images Filmstrip'" [key]="'Images Filmstrip 2'"
                   [xAlignment]="'center'" [label]="'Pepperi Images Filmstrip 1'" [showTitle]="true" [rowSpan]="7"
                   [value]="'https://idpfiles.sandbox.pepperi.com/f389fd2e-4a31-4965-a21e-3a98b4553300/images/left-side-background.jpg;https://idpfiles.sandbox.pepperi.com/f389fd2e-4a31-4965-a21e-3a98b4553300/images/logo.svg'"
                   (elementClicked)="elementClicked($event)">
            </pep-images-filmstrip> -->
            <pep-select #pepSelect [key]="'select1'" [label]="'Pepperi Select'" [value]="'val2'" [xAlignment]="'right'"
                    [options]='[{ "key": "val1", "value": "Option 1" }, { "key": "val2", "value": "Option 2" }]'
                    (valueChange)="onValueChanged($event)">
                </pep-select>


          </div>



</div>




          </div>
        </div>
      </div>

      <ng-template #dialogTemplate>
  <pep-dialog class="dialog-textarea-container" [title]="'Addon In Dialog'">
    <ng-container #placeHolder pep-dialog-content>
        <!-- <addon-proxy [options]="dialogAddon"></addon-proxy> -->

      </ng-container>
    <div pep-dialog-actions class="spacing-element-negative">
            <button mat-button (click)="closeDialog()" class="spacing-element pep-button md weak">
                {{ 'Close' | translate }}
            </button>

    </div>
  </pep-dialog>
</ng-template>

  `,
  styles: [
  // `.grid-container {
  //     display: grid;
  //     grid-template-columns: 1fr 1fr 1fr 1fr;
  //     grid-template-rows: 1fr 1fr 1fr;
  //     gap: 0px 0px;
  //     grid-template-areas:
  //       "left-side left-side right-side right-side"
  //       "footer footer footer footer"
  //       "footer footer footer footer";
  //   }

  //   .left-side { grid-area: left-side; }

  //   .right-side { grid-area: right-side; }

  //   .footer { grid-area: footer; }

  //   `
  ],
  encapsulation: ViewEncapsulation.None


})

export class DownloadComponent implements OnInit {
  @ViewChild('dialogTemplate', { read: TemplateRef })
  textAreaDialogTemplate: TemplateRef<any>;
  @ViewChild('pepSelect') pepSelect: PepSelectComponent;

  foods: any[] = [
    {value: 'steak-0', viewValue: 'Steak'},
    {value: 'pizza-1', viewValue: 'Pizza'},
    {value: 'tacos-2', viewValue: 'Tacos'}
  ];

  @Input() dataSource = null;
  @Input() displayedColumns = ['Name', 'Description'];
  @Input() customizeTable = null;
  transactionTypes;
  totalRows;
  @ViewChild(PepListComponent) customList: PepListComponent;
  dialogAddon;
  dialogRef;
  topBarInline = true;
  showListActions = false;
  plugins: AddonOptions[] = [];
  workflow: AddonOptions[] = [];
  menuItemsDialog: Array<PepMenuItem> = [];
  menuItemsLoad: Array<PepMenuItem> = [];
  menuItemsNavigate: Array<PepMenuItem> = [];
  menuItems: Array<PepMenuItem> = [];
  @Output() listChanged: EventEmitter<any> = new EventEmitter();
  @Output() sortingChanged: EventEmitter<any> = new EventEmitter();
  @Output() fieldClicked: EventEmitter<any> = new EventEmitter();
  @Output() selectedItemsChanged: EventEmitter<any> = new EventEmitter();

  @ViewChild('placeHolder', { read: ViewContainerRef, static: false })
  viewContainer: ViewContainerRef;
  compRef: ComponentRef<any>;
  options: AddonOptions;
constructor(
  private translate: TranslateService,
  private http: PepHttpService,
  private dataConvertorService: PepDataConvertorService,
  private pepDialog: PepDialogService,
  private dialog: MatDialog,
  private router: Router,
  private loc: Location,
  private injector: Injector,
  private cfr: ComponentFactoryResolver,
  private compiler: Compiler,
  private cd: ChangeDetectorRef

) {

 }

  async ngOnInit() {
    await this.lookup().then( plugins => {
      plugins.forEach(p => {
        this.menuItemsNavigate.push({key: p.displayName, text: 'Navigate To ' + p.displayName });
        this.menuItemsDialog.push({key: p.displayName, text: 'Open ' + p.displayName + ' in Dialog' });
        this.menuItemsLoad.push({key: p.displayName, text: 'Load ' + p.displayName});
        this.plugins.push(p);

    });

    this.menuItemsNavigate = this.menuItemsNavigate.splice(4);
    this.menuItemsDialog = this.menuItemsDialog.splice(0,4);
    this.menuItemsLoad = this.menuItemsLoad.splice(0,4);
    this.menuItems = [...this.menuItemsNavigate, ...this.menuItemsDialog]

    } );
    // this.menuItems = this.getMenuItems();

    this.loadlist();

   }

   detectChanges(){
     this.cd.detectChanges();
   }
   onSelectionChange(e: MatSelectChange){
    e.source.overlayDir.backdropClick.subscribe( ev => {
      e.source.close();
    this.cd.detectChanges();

    });
    e.source.close();
    this.cd.detectChanges();
  }
  onValueChanged(e: IPepFieldValueChangeEvent){
    this.pepSelect.select.overlayDir.backdropClick.subscribe( ev => {
      this.pepSelect.select.close();
    this.cd.detectChanges();

    });
    this.pepSelect.select.close();
    this.cd.detectChanges();

  }

  onActionsStateChanged(e: MatSelectChange){
    this.cd.detectChanges();
    e.source.overlayDir.backdropClick.subscribe( ev => {
      e.source.close();
    this.cd.detectChanges();

    });
    e.source.close();
    this.cd.detectChanges();

  }

   async loadAddon(options){
     if (this.viewContainer){
      this.viewContainer.clear();

     }

    // Load Module
    if (options?.useModule) {
      const module =  await loadRemoteModule(options).then(m => m);
      let moduleFactory: NgModuleFactory<any>;
      if (module[options.exposedModule.replace('./','')] instanceof NgModuleFactory) {
          moduleFactory = module[options.exposedModule.replace('./','')];
      } else {
          moduleFactory = this.compiler.compileModuleSync(module[options.exposedModule.replace('./','')]);
      }
      const moduleRef = moduleFactory.create(this.injector);
      const factory = moduleRef.componentFactoryResolver.resolveComponentFactory(module[options.componentName]);
      this.compRef = this.viewContainer.createComponent(factory, null, moduleRef.injector, null, moduleRef);
    }

    // Load Component
    else {
      const component = await loadRemoteModule(options).then(m => m[options.componentName]);
      const componentFactory = this.cfr.resolveComponentFactory(component);
      this.compRef = this.viewContainer.createComponent(componentFactory, null, this.injector);
    }
    // Send @Input() values
    this.compRef.instance['options'] = options;
    // Access the component template view
    // (this.compRef.hostView as EmbeddedViewRef<any>).rootNodes[0] as HTMLElement;
    // // Listen to @Output() events
    // this.compRef?.instance['change']?.subscribe(e => this.change.emit(e));
  }

   ngOnChanges(changes: SimpleChanges) {
      if (changes?.dataSource?.currentValue){
      }
    }
    closeDialog(data = null){
      // this.dialogRef.close(data);

      this.dialog.closeAll();
    }
    onMenuItemClicked(e){

      const selectedRow = this.customList.getSelectedItemsData().rows[0];
      const rowData = this.customList.getItemDataByID(selectedRow);
      this.dialogAddon = this.plugins.filter(p => p.displayName === e.source.key)[0];

      if (e.source.text.indexOf('Navigate') > -1){
        this.loc.go(`settings/${this.dialogAddon.uuid}/${this.dialogAddon.path}`);
      }
      else if (e.source.text.indexOf('Dialog') > -1){
        this.openSubAddonAsDialog(this.dialogAddon);
      }
      else if (e.source.text.indexOf('Load') > -1){
        this.addSubAddonToPage(this.dialogAddon);
      }
    }

    openSubAddonAsDialog(plugin: AddonOptions): void {
        const config = this.pepDialog.getDialogConfig(
        {},
          'regular'
        );
        this.dialogRef = this.pepDialog
          .openDialog(this.textAreaDialogTemplate, { addon: plugin}, config)
            .afterOpened().subscribe((res) => {
            this.loadAddon(plugin)
            });

      // dialogRef.componentInstance.options = plugin;


    }

    addSubAddonToPage(plugin: AddonOptions): void {
      this.workflow.push(plugin);
    }
    selectedRowsChanged(selectedRowsCount) {
      this.showListActions = selectedRowsCount > 0;
    }
  //   getMenuItems() {
  //     const apiNames: Array<PepMenuItem> = [];
  //             apiNames.push(new PepMenuItem({ key: path, text: item.Title}));
  //             return apiNames;
  // }
  lookup(): Promise<AddonOptions[]> {
    return Promise.resolve([
      {
        remoteEntry: 'http://localhost:3000/remoteEntry.js',
        // remoteEntry: 'http://localhost:4400/remoteEntry.js',
        remoteName: 'mfe1',
        exposedModule: './Upload',

        displayName: 'Load Remote Component',
        componentName: 'UploadComponent'
    },
      {
        remoteEntry: 'http://localhost:3000/remoteEntry.js',
        // remoteEntry: 'http://localhost:4400/remoteEntry.js',
          remoteName: 'mfe1',
          exposedModule: './DownloadModule',
          useModule: true,
          displayName: 'Remote Module',
          componentName: 'DownloadComponent'
      },

      {
        remoteEntry: 'http://localhost:4404/settings_iframe.js',
        remoteName: 'settings_iframe',
        exposedModule: './SettingsIframeModule',
        useModule: true,
        displayName: 'Remote Settings Iframe addon',
        componentName: 'SettingsIframeComponent',
        uuid: '354c5123-a7d0-4f52-8fce-3cf1ebc95314'
    },

        {
            remoteEntry: 'http://localhost:3001/remoteEntry.js',
            remoteName: 'mfe2',
            exposedModule: './Analyze',

            displayName: 'React Component',
            componentName: 'AnalyzeComponent'
        },
        // {
        //     remoteEntry: 'http://localhost:3001/remoteEntry.js',
        //     remoteName: 'mfe2',
        //     exposedModule: './Enrich',

        //     displayName: 'Enrich component',
        //     componentName: 'EnrichComponent'
        // },
        {
            remoteEntry: 'http://localhost:3001/remoteEntry.js',
            remoteName: 'mfe2',
            exposedModule: './Enrich',

            displayName: 'Themes',
            componentName: 'EnrichComponent',
            path: 'themes',
            uuid: '95501678-6687-4fb3-92ab-1155f47f839e'
        },
        {
            remoteEntry: 'http://localhost:3001/remoteEntry.js',
            remoteName: 'mfe2',
            exposedModule: './Enrich',

            displayName: 'Addon Manager',
            componentName: 'EnrichComponent',
            path: 'addons_manager',
            uuid: 'bd629d5f-a7b4-4d03-9e7c-67865a6d82a9'
        }
    ] as AddonOptions[]);
}
    loadlist(change = { sortBy: 'Name', isAsc: true, searchString: ''}) {
      let url = `/types?fields=Name,Description,UUID,InternalID&order_by=${change.sortBy} ${change.isAsc ? 'asc' : 'desc'}&where=Type=2`;
      // const search = change?.searchString;
      // if (search){
      //     url = url + (` AND (Name like '%${search}%' OR Description like '%${search}%')`);
      //     this.showListActions = false;
      // }

      // this.http.postHttpCall('http://localhost:4401/api/transaction_types', {}).subscribe(res => res);
      // this.http.postPapiApiCall(`${this.addon_uuid}`, {}).subscribe(res => res);
      this.http.getPapiApiCall(encodeURI(url)).subscribe(
          (transactionTypes) => {
              this.displayedColumns = ['Name', 'Description'];
              this.transactionTypes = transactionTypes;
              this.totalRows = transactionTypes.length;
              this.initPepList(this.transactionTypes, this.displayedColumns, this.customizeTable);

          },
          (error) => {
              // console.log(error);
          },
          () => {
          }
  );
  }

     initPepList(dataSource, displayedColumns = null, customizeFn = null) {
      if (this.customList && dataSource) {
        const tableData = new Array<PepRowData>();
        dataSource.forEach((rowData: any) => {

            tableData.push(
                this.convertToPepRowData(rowData, displayedColumns)
            );
        });

        const uiControl = this.dataConvertorService.getUiControl(
            tableData[0]
        );
        const rows = this.dataConvertorService.convertListData(tableData);
        this.customList.initListData(
            uiControl,
            rows.length,
            rows,
            'table',
            '',
            true
        );
    }
     }


    convertToPepRowData(object: any, displayedColumns = null) {
      const row = new PepRowData();
      row.Fields = [];
      const keys = displayedColumns ? displayedColumns : Object.keys(object);
      keys.forEach((key) =>
          row.Fields.push(this.initDataRowField(object, key))
      );
      return row;
  }

  initDataRowField(object: any, key: any): PepFieldData {
      const dataRowField: PepFieldData = {
          ApiName: key,
          Title: this.translate.instant(key),
          XAlignment: 1,
          FormattedValue: object[key] ? object[key].toString() : '',
          Value: object[key] ? object[key].toString() : '',
          ColumnWidth: 10,
          AdditionalValue: '',
          OptionalValues: [],
          FieldType: FIELD_TYPE.TextBox,
      };

      switch (key) {
          case 'Description':
              dataRowField.ColumnWidth = 25;
              break;
          case 'Name':
              dataRowField.ColumnWidth = 15;
              break;
          case 'Type':
              dataRowField.ColumnWidth = 15;
              dataRowField.FieldType = FIELD_TYPE.ComboBox;
              dataRowField.OptionalValues = [
                  {
                      Key: 'UseExisting',
                      Value: 'Use Existing',
                  },
                  {
                      Key: 'OverwriteExisting',
                      Value: 'Overwrite Existing',
                  },
              ];
              break;
          default:
              dataRowField.FormattedValue = object[key]
                  ? object[key].toString()
                  : '';
              break;
      }

      return dataRowField;
  }

     getSelectedItemsData(){
      return this.customList.getSelectedItemsData();
     }

     getItemDataByID(id: string){
         return this.customList.getItemDataByID(id);
     }

     elementClicked(e){
       console.log(e);
     }

}



@NgModule({
  imports: [
    CommonModule,
    BrowserAnimationsModule,
    MatSelectModule,
    MatFormFieldModule,
    SharedModule,

        ReactiveFormsModule,
        FormsModule,
        PortalModule,
        MatMenuModule,
        pepperiComponentsModules,
        BrowserAnimationsModule,
        PepNgxLibModule,
        RouterModule.forRoot([]),
        PepRemoteLoaderModule,
        TranslateModule.forRoot({
            loader: {
                provide: TranslateLoader,
                useFactory: createTranslateLoader,
                deps: [HttpClient, PepFileService, PepAddonService],
            },
        }),
    MaterialModule,
    HttpClientModule
  ],
  exports: [
    // DownloadComponent,
    // UploadComponent
  ],
  declarations: [DownloadComponent],
  bootstrap: [DownloadComponent]

})

export class DownloadModule {
  constructor(
    translate: TranslateService,
    private pepperiIconRegistry: PepIconRegistry
) {
    this.pepperiIconRegistry.registerIcons(pepIcons);
    let userLang = 'en';
    translate.setDefaultLang(userLang);
    userLang = translate.getBrowserLang().split('-')[0]; // use navigator lang if available
    if (location.href.indexOf('userLang=en') > -1) {
        userLang = 'en';
    }
    translate.use(userLang).subscribe((res: any) => {});
}
 }

 export function createTranslateLoader(
  http: HttpClient,
  fileService: PepFileService,
  addonService: PepAddonService
) {
  const addonStaticFolder = addonService.getAddonStaticFolder();
  const translationsPath: string = fileService.getAssetsTranslationsPath();
  const translationsSuffix: string = fileService.getAssetsTranslationsSuffix();

  return new MultiTranslateHttpLoader(http, [
      {
          prefix:
              addonStaticFolder.length > 0
                  ? addonStaticFolder
                  : translationsPath,
          suffix: translationsSuffix,
      },
      {
          prefix: addonStaticFolder.length > 0
          ? addonStaticFolder
          :'/assets/i18n/',
          suffix: '.json',
      },
  ]);
}




