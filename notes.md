I made this Electron application and integrated the form inside it.

I don't have prior experience with Electron so I learnt enough to build this application.

If the application was working (real API requests), I would use [ipcRenderer](https://electronjs.org/docs/api/ipc-main) and [ipcMain](https://electronjs.org/docs/api/ipc-renderer) to send data back and forth between Electron's main and renderer processes. The authentication state would have to be synchronized between renderer and main processes

Secondly, the API calls would be moved from client-side to main process for better security and I would handle authentication errors across process boundaries.

Thirdly, since this is a Desktop application, I would handle network connectivity issues and offline scenarios (specific to desktop applications).
