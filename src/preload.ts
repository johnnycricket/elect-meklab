// See the Electron documentation for details on how to use preload scripts:
// https://www.electronjs.org/docs/latest/tutorial/process-model#preload-scripts

// import { contextBridge, ipcRenderer, IpcRendererEvent } from 'electron';
import { contextBridge } from 'electron';

const api = {};

if (process.contextIsolated) {
  try {
    contextBridge.exposeInMainWorld('api', api)
  } catch ( error ) {
    console.error(error);
  }
}

// const versions: Record<string, unknown> = {};

// // Process versions
// for (const type of ['chrome', 'node', 'electron']) {
//   versions[type] = process.versions[type];
// }

// function validateIPC(channel: string) {
//   if (!channel) {
//     throw new Error(`Unsupported event IPC channel '${channel}'`);
//   }

//   return true;
// }

// // eslint-disable-next-line @typescript-eslint/no-explicit-any
// export type RendererListener = (event: IpcRendererEvent, ...args: any[]) => void;

// export const globals = {
//   /** Processes versions **/
//   versions,

//   /**
//    * A minimal set of methods exposed from Electron's `ipcRenderer`
//    * to support communication to main process.
//    */
//   ipcRenderer: {
//     // eslint-disable-next-line @typescript-eslint/no-explicit-any
//     send(channel: string, ...args: any[]) {
//       if (validateIPC(channel)) {
//         ipcRenderer.send(channel, ...args);
//       }
//     },

//     // eslint-disable-next-line @typescript-eslint/no-explicit-any
//     invoke(channel: string, ...args: any[]) {
//       if (validateIPC(channel)) {
//         return ipcRenderer.invoke(channel, ...args);
//       }
//     },

//     on(channel: string, listener: RendererListener) {
//       if (validateIPC(channel)) {
//         ipcRenderer.on(channel, listener);

//         return this;
//       }
//     },

//     once(channel: string, listener: RendererListener) {
//       if (validateIPC(channel)) {
//         ipcRenderer.once(channel, listener);

//         return this;
//       }
//     },

//     removeListener(channel: string, listener: RendererListener) {
//       if (validateIPC(channel)) {
//         ipcRenderer.removeListener(channel, listener);

//         return this;
//       }
//     },
//   },
// };

// /** Create a safe, bidirectional, synchronous bridge across isolated contexts
//  *  When contextIsolation is enabled in your webPreferences, your preload scripts run in an "Isolated World".
//  */
// contextBridge.exposeInMainWorld('electron', globals);
