
var TestRPC = require('ethereumjs-testrpc');

var testrpc;

exports['start server'] = function (test) {
	test.async();
	
	testrpc = TestRPC.server({
      ws: true,
      gasLimit: 5800000,
      total_accounts: 10,
    });

    testrpc.listen(4447, '127.0.0.1', function (err, data) {
		test.done();
	});
};

exports['close server'] = function (test) {
	test.async();
	testrpc.close(function (err, data) {
		test.done();
	});
};
