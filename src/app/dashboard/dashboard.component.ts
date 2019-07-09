import { Component, OnInit, ViewChild, ElementRef, Input } from '@angular/core';
import { ThemeConstants } from '../shared/config/theme-constant';

import { HttpClient } from '@angular/common/http';

declare var L: any;

@Component({
    selector: 'app-map',
    templateUrl: 'dashboard.html'
})

export class DashboardComponent implements OnInit {

    constructor(private colorConfig: ThemeConstants, private http: HttpClient) {
        this.height = window.innerHeight + 'px';
    }
    themeColors = this.colorConfig.get().colors;

    @ViewChild('map')
    public mapElement: ElementRef;

    // tslint:disable-next-line:no-input-rename
    @Input('appId')
    public appId: string;
    // tslint:disable-next-line:no-input-rename
    @Input('appCode')
    public appCode: string;
    private map: any;
    public srcTiles: string;
    public height: string;

    public ngOnInit() {
        // tslint:disable-next-line:max-line-length
        this.srcTiles = 'https://2.base.maps.api.here.com/maptile/2.1/maptile/newest/reduced.day/{z}/{x}/{y}/512/png8?app_id=' + this.appId + '&app_code=' + this.appCode + '&ppi=320';
    }
    // tslint:disable-next-line:use-life-cycle-interface
    public ngAfterViewInit() {
        this.map = L.map(this.mapElement.nativeElement, {
            center: [37.7397, -121.4252],
            zoom: 10,
            layers: [L.tileLayer(this.srcTiles)],
            zoomControl: true
        });
    }
    public dropMarker(address: string) {
        this.http.get('https://geocoder.api.here.com/6.2/geocode.json', {
            params: {
                app_id: this.appId,
                app_code: this.appCode,
                searchtext: address
            }
        }).subscribe(result => {
            const location = result['Response'].View[0].Result[0].Location.DisplayPosition;
            const marker = new L.Marker([location.Latitude, location.Longitude]);
            marker.addTo(this.map);
        });
    }

}
