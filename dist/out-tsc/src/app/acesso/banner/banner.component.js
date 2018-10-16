var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component } from '@angular/core';
import { trigger, state, style, transition, animate } from '@angular/animations';
var BannerComponent = /** @class */ (function () {
    function BannerComponent() {
        this.imagens = [
            { estado: 'visivel', url: '/assets/banner-acesso/img_1.png' },
            { estado: 'escondido', url: '/assets/banner-acesso/img_2.png' },
            { estado: 'escondido', url: '/assets/banner-acesso/img_3.png' },
            { estado: 'escondido', url: '/assets/banner-acesso/img_4.png' },
            { estado: 'escondido', url: '/assets/banner-acesso/img_5.png' },
        ];
    }
    BannerComponent.prototype.ngOnInit = function () {
        var _this = this;
        setTimeout(function () { return _this.rotacaoImgs(); }, 3000);
    };
    BannerComponent.prototype.rotacaoImgs = function () {
        var _this = this;
        for (var i = 0; i <= this.imagens.length; i++) {
            if (this.imagens[i].estado == 'visivel') {
                this.imagens[i].estado = 'escondido';
                this.imagens[i + 1].estado = 'visivel';
                console.log(i);
                console.log(this.imagens.length);
                break;
            }
        }
        setTimeout(function () { return _this.rotacaoImgs(); }, 3000);
    };
    BannerComponent = __decorate([
        Component({
            selector: 'app-banner',
            templateUrl: './banner.component.html',
            styleUrls: ['./banner.component.css'],
            animations: [
                trigger('banner', [
                    state('escondido', style({
                        opacity: 0
                    })),
                    state('visivel', style({
                        opacity: 1
                    })),
                    transition('escondido <=> visivel', animate('1s ease-in'))
                ])
            ]
        }),
        __metadata("design:paramtypes", [])
    ], BannerComponent);
    return BannerComponent;
}());
export { BannerComponent };
//# sourceMappingURL=banner.component.js.map