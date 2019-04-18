import { TestBed } from '@angular/core/testing';
import { FakeApiService } from './fake-api.service';
describe('FakeApiService', function () {
    beforeEach(function () { return TestBed.configureTestingModule({}); });
    it('should be created', function () {
        var service = TestBed.get(FakeApiService);
        expect(service).toBeTruthy();
    });
});
//# sourceMappingURL=fake-api.service.spec.js.map