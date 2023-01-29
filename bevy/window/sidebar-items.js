window.SIDEBAR_ITEMS = {"enum":[["CompositeAlphaMode","Specifies how the alpha channel of the textures should be handled during compositing."],["CursorGrabMode","Defines if and how the cursor is grabbed."],["CursorIcon","The icon to display for a window’s cursor."],["ExitCondition","Defines the specific conditions the application should exit on"],["FileDragAndDrop","Events related to files being dragged and dropped on a window."],["MonitorSelection","Defines which monitor to use."],["PresentMode","Presentation mode for a window."],["WindowMode","Defines the way a window is displayed"],["WindowPosition","Defines where window should be placed at on creation."],["WindowRef","Reference to a window, whether it be a direct link to a specific entity or a more vague defaulting choice."]],"fn":[["close_on_esc","Close the focused window whenever the escape key (Esc) is pressed"],["close_when_requested","Close windows in response to [`WindowCloseRequested`] (e.g.  when the close button is pressed)."],["exit_on_all_closed","Exit the application when there are no open windows."],["exit_on_primary_closed","Exit the application when the primary window has been closed"]],"mod":[["prelude",""]],"struct":[["Cursor","Stores data about the window’s cursor."],["CursorEntered","An event that is sent whenever the user’s cursor enters a window."],["CursorLeft","An event that is sent whenever the user’s cursor leaves a window."],["CursorMoved","An event reporting that the mouse cursor has moved inside a window."],["InternalWindowState","Stores internal state that isn’t directly accessible."],["ModifiesWindows","System Label marking when changes are applied to windows"],["NormalizedWindowRef","A flattened representation of a window reference for equality/hashing purposes."],["PrimaryWindow","Marker component for the window considered the primary window."],["RawHandleWrapper","A wrapper over [`RawWindowHandle`] and [`RawDisplayHandle`] that allows us to safely pass it across threads."],["ReceivedCharacter","An event that is sent whenever a window receives a character from the OS or underlying system."],["RequestRedraw","An event that indicates the window should redraw, even if its control flow is set to `Wait` and there have been no window events."],["ThreadLockedRawWindowHandleWrapper","A [`RawHandleWrapper`] that cannot be sent across threads."],["Window","Define how a window will be created and how it will behave."],["WindowBackendScaleFactorChanged","An event that indicates a window’s OS-reported scale factor has changed."],["WindowCloseRequested","An event that is sent whenever the operating systems requests that a window be closed. This will be sent when the close button of the window is pressed."],["WindowClosed","An event that is sent whenever a window is closed. This will be sent when the window entity loses its `Window` component or is despawned."],["WindowCreated","An event that is sent whenever a new window is created."],["WindowFocused","An event that indicates a window has received or lost focus."],["WindowMoved","An event that is sent when a window is repositioned in physical pixels."],["WindowPlugin","A [`Plugin`] that defines an interface for windowing support in Bevy."],["WindowResizeConstraints","The size limits on a window."],["WindowResized","A window event that is sent whenever a window’s logical size has changed."],["WindowResolution","Window Sizes"],["WindowScaleFactorChanged","An event that indicates a window’s scale factor has changed."]]};