function CollapsablePanel_Item(id, cellId, linkId, hiddenId, imageId, expandText, collapseText, allowSliding,
      slideSpeed, slideLines, styleCells, collapseStyle, expandStyle,
      collapseImageUrl, expandImageUrl, clientToggleMethod, groupName) {
      
   this.Id = id;
   this.CellId = cellId;
   this.LinkId = linkId;
   this.HiddenId = hiddenId;
   this.ImageId = imageId;
   this.ExpandText = expandText;
   this.CollapseText = collapseText;
   this.AllowSliding = allowSliding;
   this.SlideSpeed = slideSpeed;
   this.SlideLines = slideLines;
   this.StyleCells = styleCells;
   this.CollapseStyle = collapseStyle;
   this.ExpandStyle = expandStyle;
   this.CollapseImageUrl = collapseImageUrl;
   this.ExpandImageUrl = expandImageUrl;
   this.ClientToggleMethod = clientToggleMethod;
   this.GroupName = groupName;
   this.Collapsed = false;
   this.Height = '';
   this.OriginalHeight = '';
   this.Timer = null;
   
   this.Cell = null;
   this.HiddenField = null;
   this.Link = null;
   this.Image = null;
   this.Div = null;
   
   this.Setup = function() {      
      this.Cell = document.getElementById(this.CellId);
      this.HiddenField = document.getElementById(this.HiddenId);
      this.Link = document.getElementById(this.LinkId);
      this.Image = document.getElementById(this.ImageId);
      this.Div = document.getElementById(this.Id);

      this.OriginalHeight = this.Cell.clientHeight;
      this.Height = this.Cell.clientHeight;
   }
   
   this.Init = function() {
      this.Collapsed = eval(this.HiddenField.value);
      
      if (this.Collapsed) {
         this.Div.style.display = 'none';
      }
      
      if (this.AllowSliding) {
         this.Div.style.overflow = 'hidden';
      }
      
      if (this.CollapseImageUrl.length > 0) {
         var collapseImage = new Image();
         collapseImage.src = this.CollapseImageUrl;
      }
      
      if (this.ExpandImageUrl.length > 0) {
         var expandImage = new Image();
         expandImage.src = this.ExpandImageUrl;
      }
   }
   
   this.Toggle = function(collapseGroup) {
      if (this.Timer == null) {
         if (collapseGroup == null) {
            collapseGroup = true;
         }
         
         if (this.Collapsed) {
            if (collapseGroup && this.GroupName.length > 0) {
               this.CloseGroup();
            }
            
            if (!this.AllowSliding) {
               this.Div.style.display = '';
               this.SetStyle();
               this.RaiseClientFunctions();
            } else {
			      this.Div.style.height = '0px';
			      this.Div.style.display = '';

			      if (this.Height <= 1) {
			         this.Height = this.OriginalHeight;
			      }
      			
			      this.Timer = setInterval('CollapsablePanel_Find(\'' + this.Id + '\').SlideOpen()', this.SlideSpeed);
            }
            
            this.SetState(false);
            
            if (this.Link != null && this.Image != null) {
               this.Image.src = this.CollapseImageUrl;
               this.Image.alt = this.CollapseText;
            } else if (this.Link != null) {
               this.Link.innerHTML = this.CollapseText;
            }
         } else {
            if (!this.AllowSliding) {
               this.Div.style.display = 'none';
               this.SetStyle();
               this.RaiseClientFunctions();
            } else {     			
			      this.Timer = setInterval('CollapsablePanel_Find(\'' + this.Id + '\').SlideClosed()', this.SlideSpeed);
            }
            this.SetState(true);
            
            if (this.Link != null && this.Image != null) {
               this.Image.src = this.ExpandImageUrl;
               this.Image.alt = this.ExpandText;
            } else if (this.Link != null) {
               this.Link.innerHTML = this.ExpandText;
            }
         }
      }
   }
   
   this.SetStyle = function() {
      for (var i=0; i<this.StyleCells.length; i++) {
         var cell = document.getElementById(this.StyleCells[i]);
         if (cell != null) {
            var style = '';
            
            if (!this.AllowSliding) {
               if (this.Collapsed) {
                  style = this.ExpandStyle;
               } else {
                  style = this.CollapseStyle;
               }
            } else {
               if (this.Collapsed) {
                  style = this.CollapseStyle;
               } else {
                  style = this.ExpandStyle;
               }
            }
            cell.className = style;
         }
      }
   }
   
   this.SetState = function(collapsed) {
      this.Collapsed = collapsed;
      this.HiddenField.value = collapsed;
   }
   
   this.SlideOpen = function() {
      var currentHeight = this.Cell.clientHeight;
      
      if (currentHeight < this.Height) {
         currentHeight += this.SlideLines;
         if (currentHeight > this.Height) {
            currentHeight = this.Height;
         }
         this.Div.style.height = currentHeight + 'px';
      } else {
         clearInterval(this.Timer);
         this.Timer = null;
         this.Div.style.height = '';
         CollapsablePanel_ResetHeight(this.Id);
         this.SetStyle();
         this.RaiseClientFunctions();
      }
   }
   
   this.SlideClosed = function() {
      var currentHeight = this.Cell.clientHeight;
      currentHeight -= this.SlideLines;
      if (currentHeight > 0) {
         this.Div.style.height = currentHeight + 'px';
      } else {
         clearInterval(this.Timer);
         this.Timer = null;
         this.Div.style.display = 'none';
         this.Div.style.height = '';
         CollapsablePanel_ResetHeight(this.Id);
         this.SetStyle();
         this.RaiseClientFunctions();
      }
   }
   
   this.CloseGroup = function() {
      var items = CollapsablePanel_GetItemsInGroup(this.GroupName);
      for (var i=0; i<items.length; i++) {
         if (this.Id != items[i].Id && !items[i].Collapsed) {
            items[i].Toggle(false);
         }
      }
   }
   
   this.RaiseClientFunctions = function() {
      if (this.ClientToggleMethod.length > 0) {
         eval(eWorld_ReplaceFormat('{0}("{1}", {2})', new Array(this.ClientToggleMethod, this.Id, this.Collapsed)));
      }
      if (this.AutoPostBack) {
         __doPostBack(this.Id, '');
      }
   }
}

function CollapsablePanel_Find(id) {
   return eWorld_FindItem(eWorld_CollapsablePanel_Items, id);
}

function CollapsablePanel_Initialize() {
   if (typeof eWorld_CollapsablePanel_Items != 'undefined') {
      for (var i=eWorld_CollapsablePanel_Items.length - 1; i>=0; i--) {
         eWorld_CollapsablePanel_Items[i].Setup();
      }
      
      for (var i=0; i<eWorld_CollapsablePanel_Items.length; i++) {
         eWorld_CollapsablePanel_Items[i].Init();
      }
   }
}

function CollapsablePanel_InitializeCompatibility() {
   if (typeof(eWorld_UI_CollapsablePanels) != 'undefined') {
      for (var i=0; i < eWorld_UI_CollapsablePanels.length; i++) {
         var element = document.getElementById(eWorld_UI_CollapsablePanels[i]);
         eWorld_CollapsablePanel_Items[i] = eval(element.collapsablePanel);
      }
   }
   
   CollapsablePanel_Initialize();
}

function CollapsablePanel_ResetHeight(excludeId) {
   if (typeof eWorld_CollapsablePanel_Items != 'undefined') {
      for (var i=0; i<eWorld_CollapsablePanel_Items.length; i++) {
         var item = eWorld_CollapsablePanel_Items[i];
         if (item.Id != excludeId) {
            item.Height = item.Cell.clientHeight;
         }
      }
   }
}

function CollapsablePanel_GetItemsInGroup(groupName) {
   var items = new Array();
   
   if (typeof eWorld_CollapsablePanel_Items != 'undefined') {
      for (var i=0; i<eWorld_CollapsablePanel_Items.length; i++) {
         var item = eWorld_CollapsablePanel_Items[i];
         if (item.GroupName == groupName) {
            items[items.length] = item;
         }
      }
   }
   
   return items;
}
