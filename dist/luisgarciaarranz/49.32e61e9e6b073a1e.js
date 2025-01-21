"use strict";(self.webpackChunkcv_lga=self.webpackChunkcv_lga||[]).push([[49],{9049:(je,k,c)=>{c.r(k),c.d(k,{ExperienceComponent:()=>Ne});var S=c(8834),e=c(3953),f=c(177);class y{attach(a){return this._attachedHost=a,a.attach(this)}detach(){let a=this._attachedHost;null!=a&&(this._attachedHost=null,a.detach())}get isAttached(){return null!=this._attachedHost}setAttachedHost(a){this._attachedHost=a}}class U extends y{constructor(a,t,i,n,r){super(),this.component=a,this.viewContainerRef=t,this.injector=i,this.componentFactoryResolver=n,this.projectableNodes=r}}class R extends y{constructor(a,t,i,n){super(),this.templateRef=a,this.viewContainerRef=t,this.context=i,this.injector=n}get origin(){return this.templateRef.elementRef}attach(a,t=this.context){return this.context=t,super.attach(a)}detach(){return this.context=void 0,super.detach()}}class Q extends y{constructor(a){super(),this.element=a instanceof e.aKT?a.nativeElement:a}}class P{constructor(){this._isDisposed=!1,this.attachDomPortal=null}hasAttached(){return!!this._attachedPortal}attach(a){return a instanceof U?(this._attachedPortal=a,this.attachComponentPortal(a)):a instanceof R?(this._attachedPortal=a,this.attachTemplatePortal(a)):this.attachDomPortal&&a instanceof Q?(this._attachedPortal=a,this.attachDomPortal(a)):void 0}detach(){this._attachedPortal&&(this._attachedPortal.setAttachedHost(null),this._attachedPortal=null),this._invokeDisposeFn()}dispose(){this.hasAttached()&&this.detach(),this._invokeDisposeFn(),this._isDisposed=!0}setDisposeFn(a){this._disposeFn=a}_invokeDisposeFn(){this._disposeFn&&(this._disposeFn(),this._disposeFn=null)}}let Y=(()=>{class o extends P{constructor(t,i,n){super(),this._componentFactoryResolver=t,this._viewContainerRef=i,this._isInitialized=!1,this.attached=new e.bkB,this.attachDomPortal=r=>{const s=r.element,d=this._document.createComment("dom-portal");r.setAttachedHost(this),s.parentNode.insertBefore(d,s),this._getRootNode().appendChild(s),this._attachedPortal=r,super.setDisposeFn(()=>{d.parentNode&&d.parentNode.replaceChild(s,d)})},this._document=n}get portal(){return this._attachedPortal}set portal(t){this.hasAttached()&&!t&&!this._isInitialized||(this.hasAttached()&&super.detach(),t&&super.attach(t),this._attachedPortal=t||null)}get attachedRef(){return this._attachedRef}ngOnInit(){this._isInitialized=!0}ngOnDestroy(){super.dispose(),this._attachedRef=this._attachedPortal=null}attachComponentPortal(t){t.setAttachedHost(this);const i=null!=t.viewContainerRef?t.viewContainerRef:this._viewContainerRef,r=(t.componentFactoryResolver||this._componentFactoryResolver).resolveComponentFactory(t.component),s=i.createComponent(r,i.length,t.injector||i.injector,t.projectableNodes||void 0);return i!==this._viewContainerRef&&this._getRootNode().appendChild(s.hostView.rootNodes[0]),super.setDisposeFn(()=>s.destroy()),this._attachedPortal=t,this._attachedRef=s,this.attached.emit(s),s}attachTemplatePortal(t){t.setAttachedHost(this);const i=this._viewContainerRef.createEmbeddedView(t.templateRef,t.context,{injector:t.injector});return super.setDisposeFn(()=>this._viewContainerRef.clear()),this._attachedPortal=t,this._attachedRef=i,this.attached.emit(i),i}_getRootNode(){const t=this._viewContainerRef.element.nativeElement;return t.nodeType===t.ELEMENT_NODE?t:t.parentNode}static#e=this.\u0275fac=function(i){return new(i||o)(e.rXU(e.OM3),e.rXU(e.c1b),e.rXU(f.qQ))};static#t=this.\u0275dir=e.FsC({type:o,selectors:[["","cdkPortalOutlet",""]],inputs:{portal:[0,"cdkPortalOutlet","portal"]},outputs:{attached:"attached"},exportAs:["cdkPortalOutlet"],standalone:!0,features:[e.Vt3]})}return o})(),Z=(()=>{class o{static#e=this.\u0275fac=function(i){return new(i||o)};static#t=this.\u0275mod=e.$C({type:o});static#i=this.\u0275inj=e.G2t({})}return o})();var w=c(1722),x=c(8203),D=c(7336),I=c(6860),C=c(5286),J=c(4421),_=c(3176),u=c(7605);const K=["*"];function W(o,a){1&o&&e.SdG(0)}let T=(()=>{class o{constructor(t){this._elementRef=t}focus(){this._elementRef.nativeElement.focus()}static#e=this.\u0275fac=function(i){return new(i||o)(e.rXU(e.aKT))};static#t=this.\u0275dir=e.FsC({type:o,selectors:[["","cdkStepHeader",""]],hostAttrs:["role","tab"],standalone:!0})}return o})(),O=(()=>{class o{constructor(t){this.template=t}static#e=this.\u0275fac=function(i){return new(i||o)(e.rXU(e.C4Q))};static#t=this.\u0275dir=e.FsC({type:o,selectors:[["","cdkStepLabel",""]],standalone:!0})}return o})(),q=0;const A=new e.nKC("STEPPER_GLOBAL_OPTIONS");let M=(()=>{class o{get completed(){return null==this._completedOverride?this._getDefaultCompleted():this._completedOverride}set completed(t){this._completedOverride=t}_getDefaultCompleted(){return this.stepControl?this.stepControl.valid&&this.interacted:this.interacted}get hasError(){return null==this._customError?this._getDefaultError():this._customError}set hasError(t){this._customError=t}_getDefaultError(){return this.stepControl&&this.stepControl.invalid&&this.interacted}constructor(t,i){this._stepper=t,this.interacted=!1,this.interactedStream=new e.bkB,this.editable=!0,this.optional=!1,this._completedOverride=null,this._customError=null,this._stepperOptions=i||{},this._displayDefaultIndicatorType=!1!==this._stepperOptions.displayDefaultIndicatorType}select(){this._stepper.selected=this}reset(){this.interacted=!1,null!=this._completedOverride&&(this._completedOverride=!1),null!=this._customError&&(this._customError=!1),this.stepControl&&this.stepControl.reset()}ngOnChanges(){this._stepper._stateChanged()}_markAsInteracted(){this.interacted||(this.interacted=!0,this.interactedStream.emit(this))}_showError(){return this._stepperOptions.showError??null!=this._customError}static#e=this.\u0275fac=function(i){return new(i||o)(e.rXU((0,e.Rfq)(()=>m)),e.rXU(A,8))};static#t=this.\u0275cmp=e.VBU({type:o,selectors:[["cdk-step"]],contentQueries:function(i,n,r){if(1&i&&e.wni(r,O,5),2&i){let s;e.mGM(s=e.lsd())&&(n.stepLabel=s.first)}},viewQuery:function(i,n){if(1&i&&e.GBs(e.C4Q,7),2&i){let r;e.mGM(r=e.lsd())&&(n.content=r.first)}},inputs:{stepControl:"stepControl",label:"label",errorMessage:"errorMessage",ariaLabel:[0,"aria-label","ariaLabel"],ariaLabelledby:[0,"aria-labelledby","ariaLabelledby"],state:"state",editable:[2,"editable","editable",e.L39],optional:[2,"optional","optional",e.L39],completed:[2,"completed","completed",e.L39],hasError:[2,"hasError","hasError",e.L39]},outputs:{interactedStream:"interacted"},exportAs:["cdkStep"],standalone:!0,features:[e.GFd,e.OA$,e.aNF],ngContentSelectors:K,decls:1,vars:0,template:function(i,n){1&i&&(e.NAR(),e.DNE(0,W,1,0,"ng-template"))},encapsulation:2,changeDetection:0})}return o})(),m=(()=>{class o{get selectedIndex(){return this._selectedIndex}set selectedIndex(t){this.steps&&this._steps?(this._isValidIndex(t),this.selected?._markAsInteracted(),this._selectedIndex!==t&&!this._anyControlsInvalidOrPending(t)&&(t>=this._selectedIndex||this.steps.toArray()[t].editable)&&this._updateSelectedItemIndex(t)):this._selectedIndex=t}get selected(){return this.steps?this.steps.toArray()[this.selectedIndex]:void 0}set selected(t){this.selectedIndex=t&&this.steps?this.steps.toArray().indexOf(t):-1}get orientation(){return this._orientation}set orientation(t){this._orientation=t,this._keyManager&&this._keyManager.withVerticalOrientation("vertical"===t)}constructor(t,i,n){this._dir=t,this._changeDetectorRef=i,this._elementRef=n,this._destroyed=new C.B7,this.steps=new e.rOR,this._sortedHeaders=new e.rOR,this.linear=!1,this._selectedIndex=0,this.selectionChange=new e.bkB,this.selectedIndexChange=new e.bkB,this._orientation="horizontal",this._groupId=q++}ngAfterContentInit(){this._steps.changes.pipe((0,_.Z)(this._steps),(0,u.Q)(this._destroyed)).subscribe(t=>{this.steps.reset(t.filter(i=>i._stepper===this)),this.steps.notifyOnChanges()})}ngAfterViewInit(){this._stepHeader.changes.pipe((0,_.Z)(this._stepHeader),(0,u.Q)(this._destroyed)).subscribe(t=>{this._sortedHeaders.reset(t.toArray().sort((i,n)=>i._elementRef.nativeElement.compareDocumentPosition(n._elementRef.nativeElement)&Node.DOCUMENT_POSITION_FOLLOWING?-1:1)),this._sortedHeaders.notifyOnChanges()}),this._keyManager=new w.Bu(this._sortedHeaders).withWrap().withHomeAndEnd().withVerticalOrientation("vertical"===this._orientation),(this._dir?this._dir.change:(0,J.of)()).pipe((0,_.Z)(this._layoutDirection()),(0,u.Q)(this._destroyed)).subscribe(t=>this._keyManager.withHorizontalOrientation(t)),this._keyManager.updateActiveItem(this._selectedIndex),this.steps.changes.subscribe(()=>{this.selected||(this._selectedIndex=Math.max(this._selectedIndex-1,0))}),this._isValidIndex(this._selectedIndex)||(this._selectedIndex=0)}ngOnDestroy(){this._keyManager?.destroy(),this.steps.destroy(),this._sortedHeaders.destroy(),this._destroyed.next(),this._destroyed.complete()}next(){this.selectedIndex=Math.min(this._selectedIndex+1,this.steps.length-1)}previous(){this.selectedIndex=Math.max(this._selectedIndex-1,0)}reset(){this._updateSelectedItemIndex(0),this.steps.forEach(t=>t.reset()),this._stateChanged()}_getStepLabelId(t){return`cdk-step-label-${this._groupId}-${t}`}_getStepContentId(t){return`cdk-step-content-${this._groupId}-${t}`}_stateChanged(){this._changeDetectorRef.markForCheck()}_getAnimationDirection(t){const i=t-this._selectedIndex;return i<0?"rtl"===this._layoutDirection()?"next":"previous":i>0?"rtl"===this._layoutDirection()?"previous":"next":"current"}_getIndicatorType(t,i="number"){const n=this.steps.toArray()[t],r=this._isCurrentStep(t);return n._displayDefaultIndicatorType?this._getDefaultIndicatorLogic(n,r):this._getGuidelineLogic(n,r,i)}_getDefaultIndicatorLogic(t,i){return t._showError()&&t.hasError&&!i?"error":!t.completed||i?"number":t.editable?"edit":"done"}_getGuidelineLogic(t,i,n="number"){return t._showError()&&t.hasError&&!i?"error":t.completed&&!i?"done":t.completed&&i?n:t.editable&&i?"edit":n}_isCurrentStep(t){return this._selectedIndex===t}_getFocusIndex(){return this._keyManager?this._keyManager.activeItemIndex:this._selectedIndex}_updateSelectedItemIndex(t){const i=this.steps.toArray();this.selectionChange.emit({selectedIndex:t,previouslySelectedIndex:this._selectedIndex,selectedStep:i[t],previouslySelectedStep:i[this._selectedIndex]}),this._containsFocus()?this._keyManager.setActiveItem(t):this._keyManager.updateActiveItem(t),this._selectedIndex=t,this.selectedIndexChange.emit(this._selectedIndex),this._stateChanged()}_onKeydown(t){const i=(0,D.rp)(t),n=t.keyCode,r=this._keyManager;null==r.activeItemIndex||i||n!==D.t6&&n!==D.Fm?r.setFocusOrigin("keyboard").onKeydown(t):(this.selectedIndex=r.activeItemIndex,t.preventDefault())}_anyControlsInvalidOrPending(t){return!!(this.linear&&t>=0)&&this.steps.toArray().slice(0,t).some(i=>{const n=i.stepControl;return(n?n.invalid||n.pending||!i.interacted:!i.completed)&&!i.optional&&!i._completedOverride})}_layoutDirection(){return this._dir&&"rtl"===this._dir.value?"rtl":"ltr"}_containsFocus(){const t=this._elementRef.nativeElement,i=(0,I.vc)();return t===i||t.contains(i)}_isValidIndex(t){return t>-1&&(!this.steps||t<this.steps.length)}static#e=this.\u0275fac=function(i){return new(i||o)(e.rXU(x.dS,8),e.rXU(e.gRc),e.rXU(e.aKT))};static#t=this.\u0275dir=e.FsC({type:o,selectors:[["","cdkStepper",""]],contentQueries:function(i,n,r){if(1&i&&(e.wni(r,M,5),e.wni(r,T,5)),2&i){let s;e.mGM(s=e.lsd())&&(n._steps=s),e.mGM(s=e.lsd())&&(n._stepHeader=s)}},inputs:{linear:[2,"linear","linear",e.L39],selectedIndex:[2,"selectedIndex","selectedIndex",e.Udg],selected:"selected",orientation:"orientation"},outputs:{selectionChange:"selectionChange",selectedIndexChange:"selectedIndexChange"},exportAs:["cdkStepper"],standalone:!0,features:[e.GFd]})}return o})(),ee=(()=>{class o{constructor(t){this._stepper=t,this.type="submit"}static#e=this.\u0275fac=function(i){return new(i||o)(e.rXU(m))};static#t=this.\u0275dir=e.FsC({type:o,selectors:[["button","cdkStepperNext",""]],hostVars:1,hostBindings:function(i,n){1&i&&e.bIt("click",function(){return n._stepper.next()}),2&i&&e.Mr5("type",n.type)},inputs:{type:"type"},standalone:!0})}return o})(),te=(()=>{class o{constructor(t){this._stepper=t,this.type="button"}static#e=this.\u0275fac=function(i){return new(i||o)(e.rXU(m))};static#t=this.\u0275dir=e.FsC({type:o,selectors:[["button","cdkStepperPrevious",""]],hostVars:1,hostBindings:function(i,n){1&i&&e.bIt("click",function(){return n._stepper.previous()}),2&i&&e.Mr5("type",n.type)},inputs:{type:"type"},standalone:!0})}return o})(),ie=(()=>{class o{static#e=this.\u0275fac=function(i){return new(i||o)};static#t=this.\u0275mod=e.$C({type:o});static#i=this.\u0275inj=e.G2t({imports:[x.jI]})}return o})();var h=c(6600),z=c(9217),oe=c(4337),ne=c(9090),ae=c(5006),re=c(522),l=c(9969);function se(o,a){if(1&o&&e.eu8(0,2),2&o){const t=e.XpG();e.Y8G("ngTemplateOutlet",t.iconOverrides[t.state])("ngTemplateOutletContext",t._getIconContext())}}function le(o,a){if(1&o&&(e.j41(0,"span",7),e.EFF(1),e.k0s()),2&o){const t=e.XpG(2);e.R7$(),e.JRh(t._getDefaultTextForState(t.state))}}function ce(o,a){if(1&o&&(e.j41(0,"span",8),e.EFF(1),e.k0s()),2&o){const t=e.XpG(3);e.R7$(),e.JRh(t._intl.completedLabel)}}function de(o,a){if(1&o&&(e.j41(0,"span",8),e.EFF(1),e.k0s()),2&o){const t=e.XpG(3);e.R7$(),e.JRh(t._intl.editableLabel)}}function pe(o,a){if(1&o&&(e.DNE(0,ce,2,1,"span",8)(1,de,2,1,"span",8),e.j41(2,"mat-icon",7),e.EFF(3),e.k0s()),2&o){const t=e.XpG(2);e.vxM("done"===t.state?0:"edit"===t.state?1:-1),e.R7$(3),e.JRh(t._getDefaultTextForState(t.state))}}function he(o,a){if(1&o&&e.DNE(0,le,2,1,"span",7)(1,pe,4,2,"mat-icon",7),2&o){let t;const i=e.XpG();e.vxM("number"===(t=i.state)?0:1)}}function ue(o,a){1&o&&(e.j41(0,"div",4),e.eu8(1,9),e.k0s()),2&o&&(e.R7$(),e.Y8G("ngTemplateOutlet",a.template))}function me(o,a){if(1&o&&(e.j41(0,"div",4),e.EFF(1),e.k0s()),2&o){const t=e.XpG();e.R7$(),e.JRh(t.label)}}function fe(o,a){if(1&o&&(e.j41(0,"div",5),e.EFF(1),e.k0s()),2&o){const t=e.XpG();e.R7$(),e.JRh(t._intl.optionalLabel)}}function _e(o,a){if(1&o&&(e.j41(0,"div",6),e.EFF(1),e.k0s()),2&o){const t=e.XpG();e.R7$(),e.JRh(t.errorMessage)}}const N=["*"];function ve(o,a){}function ge(o,a){if(1&o&&(e.SdG(0),e.DNE(1,ve,0,0,"ng-template",0)),2&o){const t=e.XpG();e.R7$(),e.Y8G("cdkPortalOutlet",t._portal)}}const j=(o,a)=>({step:o,i:a}),H=o=>({animationDuration:o}),B=(o,a)=>({value:o,params:a});function be(o,a){1&o&&e.SdG(0)}function ye(o,a){1&o&&e.nrm(0,"div",6)}function xe(o,a){if(1&o&&(e.eu8(0,5),e.DNE(1,ye,1,0,"div",6)),2&o){const t=a.$implicit,i=a.$index,n=a.$count;e.XpG(2);const r=e.sdS(4);e.Y8G("ngTemplateOutlet",r)("ngTemplateOutletContext",e.l_i(3,j,t,i)),e.R7$(),e.vxM(i!==n-1?1:-1)}}function De(o,a){if(1&o){const t=e.RV6();e.j41(0,"div",7),e.bIt("@horizontalStepTransition.done",function(n){e.eBV(t);const r=e.XpG(2);return e.Njj(r._animationDone.next(n))}),e.eu8(1,8),e.k0s()}if(2&o){const t=a.$implicit,i=a.$index,n=e.XpG(2);e.AVh("mat-horizontal-stepper-content-inactive",n.selectedIndex!==i),e.Y8G("@horizontalStepTransition",e.l_i(8,B,n._getAnimationDirection(i),e.eq3(6,H,n._getAnimationDuration())))("id",n._getStepContentId(i)),e.BMQ("aria-labelledby",n._getStepLabelId(i)),e.R7$(),e.Y8G("ngTemplateOutlet",t.content)}}function Ce(o,a){if(1&o&&(e.j41(0,"div",1)(1,"div",2),e.Z7z(2,xe,2,6,null,null,e.fX1),e.k0s(),e.j41(4,"div",3),e.Z7z(5,De,2,11,"div",4,e.fX1),e.k0s()()),2&o){const t=e.XpG();e.R7$(2),e.Dyx(t.steps),e.R7$(3),e.Dyx(t.steps)}}function Me(o,a){if(1&o){const t=e.RV6();e.j41(0,"div",9),e.eu8(1,5),e.j41(2,"div",10)(3,"div",11),e.bIt("@verticalStepTransition.done",function(n){e.eBV(t);const r=e.XpG(2);return e.Njj(r._animationDone.next(n))}),e.j41(4,"div",12),e.eu8(5,8),e.k0s()()()()}if(2&o){const t=a.$implicit,i=a.$index,n=a.$count,r=e.XpG(2),s=e.sdS(4);e.R7$(),e.Y8G("ngTemplateOutlet",s)("ngTemplateOutletContext",e.l_i(10,j,t,i)),e.R7$(),e.AVh("mat-stepper-vertical-line",i!==n-1),e.R7$(),e.AVh("mat-vertical-stepper-content-inactive",r.selectedIndex!==i),e.Y8G("@verticalStepTransition",e.l_i(15,B,r._getAnimationDirection(i),e.eq3(13,H,r._getAnimationDuration())))("id",r._getStepContentId(i)),e.BMQ("aria-labelledby",r._getStepLabelId(i)),e.R7$(2),e.Y8G("ngTemplateOutlet",t.content)}}function Fe(o,a){if(1&o&&e.Z7z(0,Me,6,18,"div",9,e.fX1),2&o){const t=e.XpG();e.Dyx(t.steps)}}function Ee(o,a){if(1&o){const t=e.RV6();e.j41(0,"mat-step-header",13),e.bIt("click",function(){const n=e.eBV(t).step;return e.Njj(n.select())})("keydown",function(n){e.eBV(t);const r=e.XpG();return e.Njj(r._onKeydown(n))}),e.k0s()}if(2&o){const t=a.step,i=a.i,n=e.XpG();e.AVh("mat-horizontal-stepper-header","horizontal"===n.orientation)("mat-vertical-stepper-header","vertical"===n.orientation),e.Y8G("tabIndex",n._getFocusIndex()===i?0:-1)("id",n._getStepLabelId(i))("index",i)("state",n._getIndicatorType(i,t.state))("label",t.stepLabel||t.label)("selected",n.selectedIndex===i)("active",n._stepIsNavigable(i,t))("optional",t.optional)("errorMessage",t.errorMessage)("iconOverrides",n._iconOverrides)("disableRipple",n.disableRipple||!n._stepIsNavigable(i,t))("color",t.color||n.color),e.BMQ("aria-posinset",i+1)("aria-setsize",n.steps.length)("aria-controls",n._getStepContentId(i))("aria-selected",n.selectedIndex==i)("aria-label",t.ariaLabel||null)("aria-labelledby",!t.ariaLabel&&t.ariaLabelledby?t.ariaLabelledby:null)("aria-disabled",!n._stepIsNavigable(i,t)||null)}}let v=(()=>{class o extends O{static#e=this.\u0275fac=(()=>{let t;return function(n){return(t||(t=e.xGo(o)))(n||o)}})();static#t=this.\u0275dir=e.FsC({type:o,selectors:[["","matStepLabel",""]],standalone:!0,features:[e.Vt3]})}return o})(),g=(()=>{class o{constructor(){this.changes=new C.B7,this.optionalLabel="Optional",this.completedLabel="Completed",this.editableLabel="Editable"}static#e=this.\u0275fac=function(i){return new(i||o)};static#t=this.\u0275prov=e.jDH({token:o,factory:o.\u0275fac,providedIn:"root"})}return o})();const Se={provide:g,deps:[[new e.Xx1,new e.kdw,g]],useFactory:function ke(o){return o||new g}};let F=(()=>{class o extends T{constructor(t,i,n,r){super(n),this._intl=t,this._focusMonitor=i,this._intlSubscription=t.changes.subscribe(()=>r.markForCheck())}ngAfterViewInit(){this._focusMonitor.monitor(this._elementRef,!0)}ngOnDestroy(){this._intlSubscription.unsubscribe(),this._focusMonitor.stopMonitoring(this._elementRef)}focus(t,i){t?this._focusMonitor.focusVia(this._elementRef,t,i):this._elementRef.nativeElement.focus(i)}_stringLabel(){return this.label instanceof v?null:this.label}_templateLabel(){return this.label instanceof v?this.label:null}_getHostElement(){return this._elementRef.nativeElement}_getIconContext(){return{index:this.index,active:this.active,optional:this.optional}}_getDefaultTextForState(t){return"number"==t?`${this.index+1}`:"edit"==t?"create":"error"==t?"warning":t}static#e=this.\u0275fac=function(i){return new(i||o)(e.rXU(g),e.rXU(w.FN),e.rXU(e.aKT),e.rXU(e.gRc))};static#t=this.\u0275cmp=e.VBU({type:o,selectors:[["mat-step-header"]],hostAttrs:["role","tab",1,"mat-step-header"],hostVars:2,hostBindings:function(i,n){2&i&&e.HbH("mat-"+(n.color||"primary"))},inputs:{state:"state",label:"label",errorMessage:"errorMessage",iconOverrides:"iconOverrides",index:"index",selected:"selected",active:"active",optional:"optional",disableRipple:"disableRipple",color:"color"},standalone:!0,features:[e.Vt3,e.aNF],decls:10,vars:17,consts:[["matRipple","",1,"mat-step-header-ripple","mat-focus-indicator",3,"matRippleTrigger","matRippleDisabled"],[1,"mat-step-icon-content"],[3,"ngTemplateOutlet","ngTemplateOutletContext"],[1,"mat-step-label"],[1,"mat-step-text-label"],[1,"mat-step-optional"],[1,"mat-step-sub-label-error"],["aria-hidden","true"],[1,"cdk-visually-hidden"],[3,"ngTemplateOutlet"]],template:function(i,n){if(1&i&&(e.nrm(0,"div",0),e.j41(1,"div")(2,"div",1),e.DNE(3,se,1,2,"ng-container",2)(4,he,2,1),e.k0s()(),e.j41(5,"div",3),e.DNE(6,ue,2,1,"div",4)(7,me,2,1,"div",4)(8,fe,2,1,"div",5)(9,_e,2,1,"div",6),e.k0s()),2&i){let r;e.Y8G("matRippleTrigger",n._getHostElement())("matRippleDisabled",n.disableRipple),e.R7$(),e.ZvI("mat-step-icon-state-",n.state," mat-step-icon"),e.AVh("mat-step-icon-selected",n.selected),e.R7$(2),e.vxM(n.iconOverrides&&n.iconOverrides[n.state]?3:4),e.R7$(2),e.AVh("mat-step-label-active",n.active)("mat-step-label-selected",n.selected)("mat-step-label-error","error"==n.state),e.R7$(),e.vxM((r=n._templateLabel())?6:n._stringLabel()?7:-1,r),e.R7$(2),e.vxM(n.optional&&"error"!=n.state?8:-1),e.R7$(),e.vxM("error"===n.state?9:-1)}},dependencies:[h.r6,f.T3,z.An],styles:['.mat-step-header{overflow:hidden;outline:none;cursor:pointer;position:relative;box-sizing:content-box;-webkit-tap-highlight-color:rgba(0,0,0,0)}.mat-step-header:focus .mat-focus-indicator::before{content:""}.mat-step-header:hover[aria-disabled=true]{cursor:default}.mat-step-header:hover:not([aria-disabled]),.mat-step-header:hover[aria-disabled=false]{background-color:var(--mat-stepper-header-hover-state-layer-color);border-radius:var(--mat-stepper-header-hover-state-layer-shape)}.mat-step-header.cdk-keyboard-focused,.mat-step-header.cdk-program-focused{background-color:var(--mat-stepper-header-focus-state-layer-color);border-radius:var(--mat-stepper-header-focus-state-layer-shape)}@media(hover: none){.mat-step-header:hover{background:none}}.cdk-high-contrast-active .mat-step-header{outline:solid 1px}.cdk-high-contrast-active .mat-step-header[aria-selected=true] .mat-step-label{text-decoration:underline}.cdk-high-contrast-active .mat-step-header[aria-disabled=true]{outline-color:GrayText}.cdk-high-contrast-active .mat-step-header[aria-disabled=true] .mat-step-label,.cdk-high-contrast-active .mat-step-header[aria-disabled=true] .mat-step-icon,.cdk-high-contrast-active .mat-step-header[aria-disabled=true] .mat-step-optional{color:GrayText}.mat-step-optional{font-size:12px;color:var(--mat-stepper-header-optional-label-text-color)}.mat-step-sub-label-error{font-size:12px;font-weight:normal}.mat-step-icon{border-radius:50%;height:24px;width:24px;flex-shrink:0;position:relative;color:var(--mat-stepper-header-icon-foreground-color);background-color:var(--mat-stepper-header-icon-background-color)}.mat-step-icon-content{position:absolute;top:50%;left:50%;transform:translate(-50%, -50%);display:flex}.mat-step-icon .mat-icon{font-size:16px;height:16px;width:16px}.mat-step-icon-state-error{background-color:var(--mat-stepper-header-error-state-icon-background-color);color:var(--mat-stepper-header-error-state-icon-foreground-color)}.mat-step-icon-state-error .mat-icon{font-size:24px;height:24px;width:24px}.mat-step-label{display:inline-block;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;min-width:50px;vertical-align:middle;font-family:var(--mat-stepper-header-label-text-font);font-size:var(--mat-stepper-header-label-text-size);font-weight:var(--mat-stepper-header-label-text-weight);color:var(--mat-stepper-header-label-text-color)}.mat-step-label.mat-step-label-active{color:var(--mat-stepper-header-selected-state-label-text-color)}.mat-step-label.mat-step-label-error{color:var(--mat-stepper-header-error-state-label-text-color);font-size:var(--mat-stepper-header-error-state-label-text-size)}.mat-step-label.mat-step-label-selected{font-size:var(--mat-stepper-header-selected-state-label-text-size);font-weight:var(--mat-stepper-header-selected-state-label-text-weight)}.mat-step-text-label{text-overflow:ellipsis;overflow:hidden}.mat-step-header .mat-step-header-ripple{top:0;left:0;right:0;bottom:0;position:absolute;pointer-events:none}.mat-step-icon-selected{background-color:var(--mat-stepper-header-selected-state-icon-background-color);color:var(--mat-stepper-header-selected-state-icon-foreground-color)}.mat-step-icon-state-done{background-color:var(--mat-stepper-header-done-state-icon-background-color);color:var(--mat-stepper-header-done-state-icon-foreground-color)}.mat-step-icon-state-edit{background-color:var(--mat-stepper-header-edit-state-icon-background-color);color:var(--mat-stepper-header-edit-state-icon-foreground-color)}'],encapsulation:2,changeDetection:0})}return o})();const G="500ms",L="225ms",V={horizontalStepTransition:(0,l.hZ)("horizontalStepTransition",[(0,l.wk)("previous",(0,l.iF)({transform:"translate3d(-100%, 0, 0)",visibility:"hidden"})),(0,l.wk)("current",(0,l.iF)({transform:"none",visibility:"inherit"})),(0,l.wk)("next",(0,l.iF)({transform:"translate3d(100%, 0, 0)",visibility:"hidden"})),(0,l.kY)("* => *",(0,l.Os)([(0,l.i0)("{{animationDuration}} cubic-bezier(0.35, 0, 0.25, 1)"),(0,l.P)("@*",(0,l.MA)(),{optional:!0})]),{params:{animationDuration:G}})]),verticalStepTransition:(0,l.hZ)("verticalStepTransition",[(0,l.wk)("previous",(0,l.iF)({height:"0px",visibility:"hidden"})),(0,l.wk)("next",(0,l.iF)({height:"0px",visibility:"hidden"})),(0,l.wk)("current",(0,l.iF)({height:"*",visibility:"inherit"})),(0,l.kY)("* <=> current",(0,l.Os)([(0,l.i0)("{{animationDuration}} cubic-bezier(0.4, 0.0, 0.2, 1)"),(0,l.P)("@*",(0,l.MA)(),{optional:!0})]),{params:{animationDuration:L}})])};let Re=(()=>{class o{constructor(t){this.templateRef=t}static#e=this.\u0275fac=function(i){return new(i||o)(e.rXU(e.C4Q))};static#t=this.\u0275dir=e.FsC({type:o,selectors:[["ng-template","matStepperIcon",""]],inputs:{name:[0,"matStepperIcon","name"]},standalone:!0})}return o})(),X=(()=>{class o{constructor(t){this._template=t}static#e=this.\u0275fac=function(i){return new(i||o)(e.rXU(e.C4Q))};static#t=this.\u0275dir=e.FsC({type:o,selectors:[["ng-template","matStepContent",""]],standalone:!0})}return o})(),$=(()=>{class o extends M{constructor(t,i,n,r){super(t,r),this._errorStateMatcher=i,this._viewContainerRef=n,this._isSelected=oe.y.EMPTY,this.stepLabel=void 0}ngAfterContentInit(){this._isSelected=this._stepper.steps.changes.pipe((0,ne.n)(()=>this._stepper.selectionChange.pipe((0,ae.T)(t=>t.selectedStep===this),(0,_.Z)(this._stepper.selected===this)))).subscribe(t=>{t&&this._lazyContent&&!this._portal&&(this._portal=new R(this._lazyContent._template,this._viewContainerRef))})}ngOnDestroy(){this._isSelected.unsubscribe()}isErrorState(t,i){return this._errorStateMatcher.isErrorState(t,i)||!!(t&&t.invalid&&this.interacted)}static#e=this.\u0275fac=function(i){return new(i||o)(e.rXU((0,e.Rfq)(()=>E)),e.rXU(h.es,4),e.rXU(e.c1b),e.rXU(A,8))};static#t=this.\u0275cmp=e.VBU({type:o,selectors:[["mat-step"]],contentQueries:function(i,n,r){if(1&i&&(e.wni(r,v,5),e.wni(r,X,5)),2&i){let s;e.mGM(s=e.lsd())&&(n.stepLabel=s.first),e.mGM(s=e.lsd())&&(n._lazyContent=s.first)}},hostAttrs:["hidden",""],inputs:{color:"color"},exportAs:["matStep"],standalone:!0,features:[e.Jv_([{provide:h.es,useExisting:o},{provide:M,useExisting:o}]),e.Vt3,e.aNF],ngContentSelectors:N,decls:1,vars:0,consts:[[3,"cdkPortalOutlet"]],template:function(i,n){1&i&&(e.NAR(),e.DNE(0,ge,2,1,"ng-template"))},dependencies:[Y],encapsulation:2,changeDetection:0})}return o})(),E=(()=>{class o extends m{get animationDuration(){return this._animationDuration}set animationDuration(t){this._animationDuration=/^\d+$/.test(t)?t+"ms":t}constructor(t,i,n){super(t,i,n),this._stepHeader=void 0,this._steps=void 0,this.steps=new e.rOR,this.animationDone=new e.bkB,this.labelPosition="end",this.headerPosition="top",this._iconOverrides={},this._animationDone=new C.B7,this._animationDuration="",this._isServer=!(0,e.WQX)(I.OD).isBrowser;const r=n.nativeElement.nodeName.toLowerCase();this.orientation="mat-vertical-stepper"===r?"vertical":"horizontal"}ngAfterContentInit(){super.ngAfterContentInit(),this._icons.forEach(({name:t,templateRef:i})=>this._iconOverrides[t]=i),this.steps.changes.pipe((0,u.Q)(this._destroyed)).subscribe(()=>{this._stateChanged()}),this._animationDone.pipe((0,re.F)((t,i)=>t.fromState===i.fromState&&t.toState===i.toState),(0,u.Q)(this._destroyed)).subscribe(t=>{"current"===t.toState&&this.animationDone.emit()})}_stepIsNavigable(t,i){return i.completed||this.selectedIndex===t||!this.linear}_getAnimationDuration(){return this.animationDuration?this.animationDuration:"horizontal"===this.orientation?G:L}static#e=this.\u0275fac=function(i){return new(i||o)(e.rXU(x.dS,8),e.rXU(e.gRc),e.rXU(e.aKT))};static#t=this.\u0275cmp=e.VBU({type:o,selectors:[["mat-stepper"],["mat-vertical-stepper"],["mat-horizontal-stepper"],["","matStepper",""]],contentQueries:function(i,n,r){if(1&i&&(e.wni(r,$,5),e.wni(r,Re,5)),2&i){let s;e.mGM(s=e.lsd())&&(n._steps=s),e.mGM(s=e.lsd())&&(n._icons=s)}},viewQuery:function(i,n){if(1&i&&e.GBs(F,5),2&i){let r;e.mGM(r=e.lsd())&&(n._stepHeader=r)}},hostAttrs:["role","tablist"],hostVars:11,hostBindings:function(i,n){2&i&&(e.BMQ("aria-orientation",n.orientation),e.AVh("mat-stepper-horizontal","horizontal"===n.orientation)("mat-stepper-vertical","vertical"===n.orientation)("mat-stepper-label-position-end","horizontal"===n.orientation&&"end"==n.labelPosition)("mat-stepper-label-position-bottom","horizontal"===n.orientation&&"bottom"==n.labelPosition)("mat-stepper-header-position-bottom","bottom"===n.headerPosition))},inputs:{disableRipple:"disableRipple",color:"color",labelPosition:"labelPosition",headerPosition:"headerPosition",animationDuration:"animationDuration"},outputs:{animationDone:"animationDone"},exportAs:["matStepper","matVerticalStepper","matHorizontalStepper"],standalone:!0,features:[e.Jv_([{provide:m,useExisting:o}]),e.Vt3,e.aNF],ngContentSelectors:N,decls:5,vars:2,consts:[["stepTemplate",""],[1,"mat-horizontal-stepper-wrapper"],[1,"mat-horizontal-stepper-header-container"],[1,"mat-horizontal-content-container"],["role","tabpanel",1,"mat-horizontal-stepper-content",3,"id","mat-horizontal-stepper-content-inactive"],[3,"ngTemplateOutlet","ngTemplateOutletContext"],[1,"mat-stepper-horizontal-line"],["role","tabpanel",1,"mat-horizontal-stepper-content",3,"id"],[3,"ngTemplateOutlet"],[1,"mat-step"],[1,"mat-vertical-content-container"],["role","tabpanel",1,"mat-vertical-stepper-content",3,"id"],[1,"mat-vertical-content"],[3,"click","keydown","tabIndex","id","index","state","label","selected","active","optional","errorMessage","iconOverrides","disableRipple","color"]],template:function(i,n){if(1&i&&(e.NAR(),e.DNE(0,be,1,0)(1,Ce,7,0,"div",1)(2,Fe,2,0)(3,Ee,1,23,"ng-template",null,0,e.C5r)),2&i){let r;e.vxM(n._isServer?0:-1),e.R7$(),e.vxM("horizontal"===(r=n.orientation)?1:"vertical"===r?2:-1)}},dependencies:[f.T3,F],styles:['.mat-stepper-vertical,.mat-stepper-horizontal{display:block;font-family:var(--mat-stepper-container-text-font);background:var(--mat-stepper-container-color)}.mat-horizontal-stepper-header-container{white-space:nowrap;display:flex;align-items:center}.mat-stepper-label-position-bottom .mat-horizontal-stepper-header-container{align-items:flex-start}.mat-stepper-header-position-bottom .mat-horizontal-stepper-header-container{order:1}.mat-stepper-horizontal-line{border-top-width:1px;border-top-style:solid;flex:auto;height:0;margin:0 -16px;min-width:32px;border-top-color:var(--mat-stepper-line-color)}.mat-stepper-label-position-bottom .mat-stepper-horizontal-line{margin:0;min-width:0;position:relative;top:calc(calc((var(--mat-stepper-header-height) - 24px) / 2) + 12px)}.mat-stepper-label-position-bottom .mat-horizontal-stepper-header:not(:first-child)::before,[dir=rtl] .mat-stepper-label-position-bottom .mat-horizontal-stepper-header:not(:last-child)::before,.mat-stepper-label-position-bottom .mat-horizontal-stepper-header:not(:last-child)::after,[dir=rtl] .mat-stepper-label-position-bottom .mat-horizontal-stepper-header:not(:first-child)::after{border-top-width:1px;border-top-style:solid;content:"";display:inline-block;height:0;position:absolute;width:calc(50% - 20px)}.mat-horizontal-stepper-header{display:flex;height:72px;overflow:hidden;align-items:center;padding:0 24px;height:var(--mat-stepper-header-height)}.mat-horizontal-stepper-header .mat-step-icon{margin-right:8px;flex:none}[dir=rtl] .mat-horizontal-stepper-header .mat-step-icon{margin-right:0;margin-left:8px}.mat-horizontal-stepper-header::before,.mat-horizontal-stepper-header::after{border-top-color:var(--mat-stepper-line-color)}.mat-stepper-label-position-bottom .mat-horizontal-stepper-header{padding:calc((var(--mat-stepper-header-height) - 24px) / 2) 24px}.mat-stepper-label-position-bottom .mat-horizontal-stepper-header::before,.mat-stepper-label-position-bottom .mat-horizontal-stepper-header::after{top:calc(calc((var(--mat-stepper-header-height) - 24px) / 2) + 12px)}.mat-stepper-label-position-bottom .mat-horizontal-stepper-header{box-sizing:border-box;flex-direction:column;height:auto}.mat-stepper-label-position-bottom .mat-horizontal-stepper-header:not(:last-child)::after,[dir=rtl] .mat-stepper-label-position-bottom .mat-horizontal-stepper-header:not(:first-child)::after{right:0}.mat-stepper-label-position-bottom .mat-horizontal-stepper-header:not(:first-child)::before,[dir=rtl] .mat-stepper-label-position-bottom .mat-horizontal-stepper-header:not(:last-child)::before{left:0}[dir=rtl] .mat-stepper-label-position-bottom .mat-horizontal-stepper-header:last-child::before,[dir=rtl] .mat-stepper-label-position-bottom .mat-horizontal-stepper-header:first-child::after{display:none}.mat-stepper-label-position-bottom .mat-horizontal-stepper-header .mat-step-icon{margin-right:0;margin-left:0}.mat-stepper-label-position-bottom .mat-horizontal-stepper-header .mat-step-label{padding:16px 0 0 0;text-align:center;width:100%}.mat-vertical-stepper-header{display:flex;align-items:center;height:24px;padding:calc((var(--mat-stepper-header-height) - 24px) / 2) 24px}.mat-vertical-stepper-header .mat-step-icon{margin-right:12px}[dir=rtl] .mat-vertical-stepper-header .mat-step-icon{margin-right:0;margin-left:12px}.mat-horizontal-stepper-wrapper{display:flex;flex-direction:column}.mat-horizontal-stepper-content{outline:0}.mat-horizontal-stepper-content.mat-horizontal-stepper-content-inactive{height:0;overflow:hidden}.mat-horizontal-stepper-content:not(.mat-horizontal-stepper-content-inactive){visibility:inherit !important}.mat-horizontal-content-container{overflow:hidden;padding:0 24px 24px 24px}.cdk-high-contrast-active .mat-horizontal-content-container{outline:solid 1px}.mat-stepper-header-position-bottom .mat-horizontal-content-container{padding:24px 24px 0 24px}.mat-vertical-content-container{margin-left:36px;border:0;position:relative}.cdk-high-contrast-active .mat-vertical-content-container{outline:solid 1px}[dir=rtl] .mat-vertical-content-container{margin-left:0;margin-right:36px}.mat-stepper-vertical-line::before{content:"";position:absolute;left:0;border-left-width:1px;border-left-style:solid;border-left-color:var(--mat-stepper-line-color);top:calc(8px - calc((var(--mat-stepper-header-height) - 24px) / 2));bottom:calc(8px - calc((var(--mat-stepper-header-height) - 24px) / 2))}[dir=rtl] .mat-stepper-vertical-line::before{left:auto;right:0}.mat-vertical-stepper-content{overflow:hidden;outline:0}.mat-vertical-stepper-content:not(.mat-vertical-stepper-content-inactive){visibility:inherit !important}.mat-vertical-content{padding:0 24px 24px 24px}.mat-step:last-child .mat-vertical-content-container{border:none}'],encapsulation:2,data:{animation:[V.horizontalStepTransition,V.verticalStepTransition]},changeDetection:0})}return o})(),Pe=(()=>{class o extends ee{static#e=this.\u0275fac=(()=>{let t;return function(n){return(t||(t=e.xGo(o)))(n||o)}})();static#t=this.\u0275dir=e.FsC({type:o,selectors:[["button","matStepperNext",""]],hostAttrs:[1,"mat-stepper-next"],hostVars:1,hostBindings:function(i,n){2&i&&e.Mr5("type",n.type)},standalone:!0,features:[e.Vt3]})}return o})(),we=(()=>{class o extends te{static#e=this.\u0275fac=(()=>{let t;return function(n){return(t||(t=e.xGo(o)))(n||o)}})();static#t=this.\u0275dir=e.FsC({type:o,selectors:[["button","matStepperPrevious",""]],hostAttrs:[1,"mat-stepper-previous"],hostVars:1,hostBindings:function(i,n){2&i&&e.Mr5("type",n.type)},standalone:!0,features:[e.Vt3]})}return o})(),Ie=(()=>{class o{static#e=this.\u0275fac=function(i){return new(i||o)};static#t=this.\u0275mod=e.$C({type:o});static#i=this.\u0275inj=e.G2t({providers:[Se,h.es],imports:[h.yE,f.MD,Z,ie,z.m_,h.pZ,E,F,h.yE]})}return o})();function Te(o,a){1&o&&e.EFF(0,"2022-actualidad Sercide")}function Oe(o,a){1&o&&(e.j41(0,"div",7)(1,"p")(2,"strong"),e.EFF(3,"Desarrollador Full Stack en SERCIDE"),e.k0s()(),e.j41(4,"p"),e.EFF(5," En SERCIDE, asumo un rol como desarrollador full stack con responsabilidad en el desarrollo de aplicaciones eficientes y escalables, trabajando con tecnolog\xedas modernas y m\xe9todos \xe1giles. "),e.k0s(),e.j41(6,"p")(7,"strong"),e.EFF(8,"Frontend:"),e.k0s(),e.EFF(9," Desarrollo y optimizaci\xf3n de interfaces de usuario din\xe1micas utilizando Angular, garantizando una experiencia fluida y amigable para el usuario final. Realic\xe9 tareas de refactorizaci\xf3n para mejorar la eficiencia del c\xf3digo existente y actualic\xe9 la versi\xf3n de Angular de la 13 a la 17, implementando mejoras en rendimiento y nuevas funcionalidades. "),e.k0s(),e.j41(10,"p")(11,"strong"),e.EFF(12,"Backend:"),e.k0s(),e.EFF(13," Implementaci\xf3n de servicios y l\xf3gica empresarial robusta con Golang, asegurando un rendimiento elevado y una alta capacidad de respuesta. "),e.k0s(),e.j41(14,"p")(15,"strong"),e.EFF(16,"Gesti\xf3n de Datos:"),e.k0s(),e.EFF(17," Configuraci\xf3n y mantenimiento de bases de datos tanto relacionales (PostgreSQL) como no relacionales (MongoDB) para cubrir diferentes necesidades de almacenamiento y procesamiento de datos. "),e.k0s(),e.j41(18,"p")(19,"strong"),e.EFF(20,"Despliegue y Hosting:"),e.k0s(),e.EFF(21," Implementaci\xf3n y despliegue de aplicaciones en Google Cloud Platform (GCP), optimizando el rendimiento y la escalabilidad en la nube. "),e.k0s(),e.j41(22,"p")(23,"strong"),e.EFF(24,"Control de Versiones y Colaboraci\xf3n:"),e.k0s(),e.EFF(25," Uso de Git para la gesti\xf3n de versiones y el trabajo en equipo, facilitando un desarrollo organizado y eficiente. "),e.k0s(),e.j41(26,"p")(27,"strong"),e.EFF(28,"Gesti\xf3n de Proyectos y Resoluci\xf3n de Incidencias:"),e.k0s(),e.EFF(29," Coordinaci\xf3n del flujo de trabajo mediante Jira, gestionando el backlog y resolviendo incidencias de manera \xe1gil y colaborativa. "),e.k0s(),e.j41(30,"p"),e.EFF(31," Esta posici\xf3n me permite aplicar y ampliar mis conocimientos en desarrollo full stack, as\xed como colaborar en equipos multidisciplinarios para alcanzar los objetivos del proyecto. "),e.k0s()(),e.j41(32,"button",8),e.EFF(33,"Siguiente"),e.k0s())}function Ae(o,a){1&o&&e.EFF(0,"2018-2022 Comunytek Consultores")}function ze(o,a){1&o&&(e.j41(0,"p"),e.EFF(1,"This content was also rendered lazily"),e.k0s(),e.j41(2,"button",9),e.EFF(3,"Back"),e.k0s(),e.j41(4,"button",8),e.EFF(5,"Next"),e.k0s())}let Ne=(()=>{class o{static#e=this.\u0275fac=function(i){return new(i||o)};static#t=this.\u0275cmp=e.VBU({type:o,selectors:[["app-experience"]],standalone:!0,features:[e.aNF],decls:14,vars:0,consts:[[1,"content"],[1,"row"],[1,"col-12"],[1,"d-flex","justify-content-center"],["orientation","vertical"],["matStepLabel",""],["matStepContent",""],[1,"text-experience"],["mat-button","","matStepperNext",""],["mat-button","","matStepperPrevious",""]],template:function(i,n){1&i&&(e.j41(0,"div",0)(1,"div",1)(2,"div",2)(3,"div",3)(4,"h1"),e.EFF(5,"Experiencia laboral \u{1f468}\u{1f3fc}\u200d\u{1f4bb}"),e.k0s()()(),e.j41(6,"div",2)(7,"mat-stepper",4)(8,"mat-step"),e.DNE(9,Te,1,0,"ng-template",5)(10,Oe,34,0,"ng-template",6),e.k0s(),e.j41(11,"mat-step"),e.DNE(12,Ae,1,0,"ng-template",5)(13,ze,6,0,"ng-template",6),e.k0s()()()()())},dependencies:[Ie,$,v,E,Pe,we,X,S.Hl,S.$z],styles:['.content[_ngcontent-%COMP%]{margin:20px;padding:5%}@charset "UTF-8";.text-experience[_ngcontent-%COMP%]{text-align:justify;line-height:1.6}.text-experience[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{margin-bottom:16px}.text-experience[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%]{font-weight:700;color:#2c3e50}']})}return o})()}}]);