import { Injectable } from '@angular/core';
import { AddonOptions } from './plugin';

@Injectable({ providedIn: 'root' })
export class LookupService {
    lookup(): Promise<AddonOptions[]> {
        return Promise.resolve([
        //   {
        //     remoteEntry: 'http://localhost:3010/import_export_atd.js',
        //     remoteName: 'import_export_atd',
        //     exposedModule: './ImportAtdModule',
        //     useModule: true,
        //     displayName: 'Remote Import Component',
        //     componentName: 'ImportAtdComponent'
        // },
          {
            remoteEntry: 'http://localhost:3000/remoteEntry.js',
            // remoteEntry: 'http://localhost:4400/remoteEntry.js',
              remoteName: 'mfe1',
              exposedModule: './DownloadModule',
              useModule: true,
              displayName: 'Remote Module',
              componentName: 'DownloadComponent'
          },

        //   {
        //     remoteEntry: 'http://localhost:3010/import_export_atd.js',
        //     remoteName: 'import_export_atd',
        //     exposedModule: './ExportAtdModule',
        //     useModule: true,
        //     displayName: 'Remote Export Component',
        //     componentName: 'ExportAtdComponent'
        // },


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
}
