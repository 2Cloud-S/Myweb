define(["jquery","version!fly/managers/debug","managers/tealium","managers/page-vars","version!fly/components/base"],function(e,t,i,c){var a=t.init("externalLink");e.widget("cnet.externalLink",e.fly.base,{options:{appendViewguid:!0},viewguid:null,commerceClickPlaceholder:"___COM_CLICK_ID___",_create:function(){this._setup(),this.viewguid=c.guid,this.options.appendViewguid&&this.viewguid&&this.$element.attr("href",this.$element.attr("href").replace("___VIEW_GUID___",this.viewguid)),this._setupEvents(),window.externalLink=!0},_setupEvents:function(){var t=this;this.$element.on("mousedown",function(n){0!=n.button&&1!=n.button&&2!=n.button||(a.log("External link clicked."),t._setCommerceClickId(),c.tracking.data.commerceClickId&&e(this).attr("href",e(this).attr("href").replace(t.commerceClickPlaceholder,c.tracking.data.commerceClickId.replaceAll("-",""))),i.trackExternalLink({clickGenericText:"trackExternalLink"}),setTimeout(e.proxy(function(){c.tracking.data.commerceClickId&&e(this).attr("href",e(this).attr("href").replace(c.tracking.data.commerceClickId.replaceAll("-",""),t.commerceClickPlaceholder))},this),500))})},_setCommerceClickId:function(){var e=window.uuid();utag_data.commerceClickId=e,c.tracking.data.commerceClickId=e}})});