import tkinter as tk
from sharepoint_api import SharePointAPI
from gui_components import MainWindow

# Configurações do SharePoint
CLIENT_ID = "8a85d37a-0c42-4715-899a-66cd047c6164"
CLIENT_SECRET = "hqd8Q~jIdYZ_k.Ui~UeWP3gEJjpA4LnHd~5sgbho"
TENANT_ID = "41a1cdb0-e2b8-4fb2-8d1c-764e0cc64d66"
SITE_ID = "getjobtecbr.sharepoint.com,aba6f3b4-b0ff-411c-b159-7a6eff1c75be,90b858d8-191f-48d6-9700-5d78aacc1626"

class SharePointApp(tk.Tk):
    def __init__(self):
        super().__init__()
        
        self.title("Gerador Proposta Tecnica Automatica Beta")
        self.geometry("800x600")
        
        self.api = SharePointAPI(CLIENT_ID, CLIENT_SECRET, TENANT_ID, SITE_ID)
        
        main_window = MainWindow(self, self.api)
        main_window.pack(expand=True, fill="both")

if __name__ == "__main__":
    app = SharePointApp()
    app.mainloop()