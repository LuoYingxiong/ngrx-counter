import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import {CustomCounterInputComponent} from './custom-counter-input.component';

describe('CustomCounterInputComponent', () => {
    let component: CustomCounterInputComponent;
    let fixture: ComponentFixture<CustomCounterInputComponent>;

    beforeEach(waitForAsync(() => {
        TestBed.configureTestingModule({
            declarations: [CustomCounterInputComponent]
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(CustomCounterInputComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
