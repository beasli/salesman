import { TestBed } from '@angular/core/testing';
import { SqlService } from './sql.service';
describe('SqlService', function () {
    beforeEach(function () { return TestBed.configureTestingModule({}); });
    it('should be created', function () {
        var service = TestBed.get(SqlService);
        expect(service).toBeTruthy();
    });
});
//# sourceMappingURL=sql.service.spec.js.map