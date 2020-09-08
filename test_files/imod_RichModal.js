imod.RichModal = function ()
{
	// private vars
	var width, height, hideOnOverlayClick, showCloseButton, enableEscapeButton, href, type, contentQuery, scrolling, resizeWithContent, centerOnScroll = true, displayAsModal;
	var onClientCloseButtonClick = null;
	// private methods
	var maxWidth = (window.innerWidth > 0) ? window.innerWidth : screen.width;
	var GetFancyboxOptions = function ()
	{
		//imod.log({'href': href, 'type': type, 'scrolling': scrolling, 'closeBtn': showCloseButton, 'width': width, 'height': height, 'keys': enableEscapeButton, 'autoResize': resizeWithContent, 'modal': displayAsModal, 'fixed': centerOnScroll});
		return (href ? // force iframe if href is set
			{
				'href': href,
				'type': 'iframe',
				'scrolling': (imod.RolloutFlags.UseAdminTemplate3) ? "no" : scrolling,
				'hideOnOverlayClick': hideOnOverlayClick,
				'closeBtn': showCloseButton,
				'width': width > 0 ? width : maxWidth > 800 ? 800 : maxWidth,
				'height': height > 0 ? height : 'auto',
				'keys': enableEscapeButton ? { 'close': [27] } : '',
				'autoCenter': true, // make the modal stay in the middle when scrolling
				'isSmartPhone': imod.Browser.IsSmartPhone,
				'isTablet': imod.Browser.IsTablet,
				'isIPhone': IsIPhone(),
				'isMobileSafari': imod.Browser.BrowserName == "Mobile Safari",
				'autoSize': (width == 0 && height == 0) ? true : false,
				'iframe': { 'scrolling': scrolling, 'preload': imod.Browser.BrowserName != 'Internet Explorer' || imod.Browser.BrowserVersion != '8.0' },
				'autoResize': resizeWithContent,
				'modal': displayAsModal,
				'fixed': centerOnScroll
			}
			:
			{
				'type': type == undefined ? 'inline' : type,
				'width': width,
				'height': height,
				'autoSize': (width == 0 && height == 0) ? true : false,
				'autoResize': resizeWithContent,
				'modal': displayAsModal,
				'fixed': centerOnScroll
			}
		);
	},
	IsIPhone = function ()
	{
		return imod.Browser.IsSmartPhone && imod.Browser.PlatformName == "iOS";
	},
	OpenById = function(elementId) {
		if (elementId) {
			contentQuery = elementId;
			type = 'inline';
		}
		jQuery.fancybox(contentQuery, GetFancyboxOptions());		
	},
	Open = function (urlOrContentQuery, isContentQuery, prmIsIPhone)
	{
		if (isContentQuery || contentQuery)
		{
			// if explicitly content or the main contentQuery var has something in it, assume inline type
			if (urlOrContentQuery)
			{
				// set the main content var
				contentQuery = urlOrContentQuery;
				// set the type
				type = 'inline';
			}
			jQuery.fancybox(jQuery(contentQuery).html(), GetFancyboxOptions());
		}
		else
		{
			// otherwise, assume iframe if urlOrContentQuery has something in it
			if (urlOrContentQuery)
			{
				// set the main href var
				href = urlOrContentQuery;
			}
			jQuery.fancybox(GetFancyboxOptions());
		}
		if (onClientCloseButtonClick)
		{
			imod.dom.AddHandler(imod$("fancybox-close"), "click", onClientCloseButtonClick);
		}
	},
	Close = function ()
	{
		jQuery.fancybox.close();
	},
	OpenUrlOnLoad = function (prmWidth, prmHeight, prmHideOnOverlayClick, prmShowCloseButton, prmEnableEscapeButton, prmScrolling, prmResizeWithContent, prmDisplayAsModal, prmUrl)
	{
		RegisterModalProperties(prmWidth, prmHeight, prmHideOnOverlayClick, prmShowCloseButton, prmEnableEscapeButton, prmScrolling, prmResizeWithContent, prmDisplayAsModal, prmUrl, null);
		jQuery(document).ready(function ()
		{
			Open();
		});
	},
	OpenInlineOnLoad = function (prmWidth, prmHeight, prmHideOnOverlayClick, prmShowCloseButton, prmEnableEscapeButton, prmContentQuery, prmScrolling, prmResizeWithContent, prmDisplayAsModal)
	{
		RegisterModalProperties(prmWidth, prmHeight, prmHideOnOverlayClick, prmShowCloseButton, prmEnableEscapeButton, prmScrolling, prmResizeWithContent, prmDisplayAsModal, null, prmContentQuery);
		jQuery(document).ready(function ()
		{
			Open();
		});
	},
	RegisterModalProperties = function (prmWidth, prmHeight, prmHideOnOverlayClick, prmShowCloseButton, prmEnableEscapeButton, prmScrolling, prmResizeWithContent, prmDisplayAsModal, prmHref, prmContentQuery)
	{
		width = prmWidth;
		height = prmHeight;
		hideOnOverlayClick = prmHideOnOverlayClick;
		showCloseButton = prmShowCloseButton;
		enableEscapeButton = prmEnableEscapeButton;
		scrolling = prmScrolling;
		resizeWithContent = prmResizeWithContent;
		href = prmHref;
		contentQuery = prmContentQuery;
		displayAsModal = prmDisplayAsModal;
	},
	RegisterModal = function (prmWidth, prmHeight, prmHideOnOverlayClick, prmShowCloseButton, prmEnableEscapeButton, prmScrolling, prmResizeWithContent, prmDisplayAsModal, prmTriggerQuery, prmType)
	{
		width = prmWidth;
		height = prmHeight;
		hideOnOverlayClick = prmHideOnOverlayClick;
		showCloseButton = prmShowCloseButton;
		enableEscapeButton = prmEnableEscapeButton;
		scrolling = prmScrolling;
		resizeWithContent = prmResizeWithContent;
		jQuery(document).ready(function ()
		{
			jQuery(prmTriggerQuery).fancybox(GetFancyboxOptions());
		});
		type = prmType;
		displayAsModal = prmDisplayAsModal;
	},
	SetClientCloseButtonClick = function (methodName)
	{
		onClientCloseButtonClick = methodName;
	}; // public methods
	return {
		OpenUrlOnLoad: OpenUrlOnLoad,
		OpenInlineOnLoad: OpenInlineOnLoad,
		RegisterModalProperties: RegisterModalProperties,
		OpenById: OpenById,
		Open: Open,
		Close: Close,
		RegisterModal: RegisterModal,
		SetClientCloseButtonClick: SetClientCloseButtonClick
	};
};

if (window.IModController) { IModController.scriptLoadedNotification("/scripts/imod_RichModal.js"); }