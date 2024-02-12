import { SampleObj } from "./sampleObj.js";

	
var execSample = function () {
    const sample = SampleObj.createInstance("サンプルクラス名")
    alert(sample.getName());
}

execSample();
