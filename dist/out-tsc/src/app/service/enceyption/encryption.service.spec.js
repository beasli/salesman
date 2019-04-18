import { TestBed } from '@angular/core/testing';
import { EncryptionService } from './encryption.service';
describe('EncryptionService', function () {
    beforeEach(function () { return TestBed.configureTestingModule({}); });
    it('should be created', function () {
        var service = TestBed.get(EncryptionService);
        expect(service).toBeTruthy();
    });
});
//# sourceMappingURL=encryption.service.spec.js.map