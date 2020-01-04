const decoder = require('../index');

test('transfer', () => {
  let bnbSend =
    'ce01f0625dee0a4a2a2c87fa0a210a14d1a42a815fc6a339ecd8bfcd093dd1a835f40e1312090a03424e4210e8922612210a14e0a17a3ec9ddfd1d9c8b4e17df0622c679ffa89812090a03424e4210e89226126f0a26eb5ae987210298013db8d32124d1c11570cd37f8e52297bd18ea561cf990907f7aa03e486d6c1240ee378db6506d180dee42fdc54157c562fdd4d047a9c1c33ef407af6bd435a9023a2e0ebdb3061943a88b3a434d6b2ba8a4c970db218bd38fecf9796de973a43d182720cc011a097369676e61747572652001';
  let decodedTx = decoder.decode(bnbSend);
  expect(decodedTx.msg[0].inputs[0].address).toBe('bnb16xjz4q2lc63nnmxchlxsj0w34q6lgrsnhff60l');
  expect(typeof decodedTx).toBe('object');
  expect(decodedTx).toHaveProperty('msg');
  expect(decodedTx).toHaveProperty('signatures');
  expect(decodedTx).toHaveProperty('msgType');

  let decodedTx2 = decoder.decodeTransfer(bnbSend);
  expect(JSON.stringify(decodedTx)).toBe(JSON.stringify(decodedTx2));
}, 3000);

test('transfer1', () => {
  let bnbSend =
    'DE01F0625DEE0A582A2C87FA0A280A140D0645CD9E65D5A4979FE1D70B98F9392AB96F4412100A074156412D3634351080A0EDD1FA0312280A14455CD7364F31518423FC303571991BA8DD5CB0D212100A074156412D3634351080A0EDD1FA03126E0A26EB5AE9872102321DD49D8AA2725E2362B9C69045FAF7156EB402AB91E9B9D0BC1C4B87F306BD124063A36F36148ED6AE74EA6932653A1229F316B2D153DD678DD6D160EBCD00373F63C75A3FE0A1F5F944C5D94EF310E7B4C5DB1F43B0E092044D402A1BAE1D41AD18EAAB141A0C4156415F445F3032313630312002';
  let decodedTx = decoder.decode(bnbSend);
  expect(decodedTx.msg[0].inputs[0].address).toBe('bnb1p5rytnv7vh26f9ulu8tshx8e8y4tjm6ywmux5v');
  expect(decodedTx.msg[0].inputs[0].coins[0].amount).toBe(136000000000);
  expect(decodedTx.msg[0].inputs[0].coins[0].denom).toBe('AVA-645');
  expect(decodedTx.msg[0].outputs[0].address).toBe('bnb1g4wdwdj0x9gcggluxq6hrxgm4rw4evxjv3h6yw');
  expect(decodedTx.msg[0].outputs[0].coins[0].amount).toBe(136000000000);
  expect(decodedTx.msg[0].outputs[0].coins[0].denom).toBe('AVA-645');
  expect(decodedTx.signatures[0].account_number).toBe(333290);
  expect(decodedTx.signatures[0].pub_key.value).toBe('AjId1J2KonJeI2K5xpBF+vcVbrQCq5HpudC8HEuH8wa9');
  expect(decodedTx.signatures[0].sequence).toBe(0);
  expect(decodedTx.signatures[0].signature).toBe(
    'Y6NvNhSO1q506mkyZToSKfMWstFT3WeN1tFg680ANz9jx1o/4KH1+UTF2U7zEOe0xdsfQ7DgkgRNQCobrh1BrQ=='
  );
  expect(decodedTx.source).toBe(2);
  expect(decodedTx.memo).toBe('AVA_D_021601');
  expect(decodedTx.data).toBe('');
  expect(typeof decodedTx).toBe('object');
  expect(decodedTx).toHaveProperty('msg');
  expect(decodedTx).toHaveProperty('signatures');
  expect(decodedTx).toHaveProperty('msgType');

  let decodedTx2 = decoder.decodeTransfer(bnbSend);
  expect(JSON.stringify(decodedTx)).toBe(JSON.stringify(decodedTx2));
}, 3000);

test('transfer2', () => {
  let bnbSend =
    'E101F0625DEE0A582A2C87FA0A280A14EE696A9AE06A219BDA47A5753DA9BDEAFF8E7EA312100A074156412D36343510C0D18B97D00112280A14455CD7364F31518423FC303571991BA8DD5CB0D212100A074156412D36343510C0D18B97D00112710A26EB5AE98721030518AEB93DC9DBF0E13055484103AEE55E710310D681D1B30BD2F958676F4A1D12400F1360F338B218F1CA96896372B3AF5B9549F8574C3BF7299F6114EE4899B92559F5745E13CB1367E45F4CF8863B2C877BE2727A7843C0870BA46ABC75E8AC9A18AEFE132098031A0E4156415F5245465F303030343134';
  let decodedTx = decoder.decode(bnbSend);
  expect(decodedTx.msg[0].inputs[0].address).toBe('bnb1ae5k4xhqdgsehkj8546nm2daatlcul4rravvd6');
  expect(decodedTx.msg[0].inputs[0].coins[0].amount).toBe(55883000000);
  expect(decodedTx.msg[0].inputs[0].coins[0].denom).toBe('AVA-645');
  expect(decodedTx.msg[0].outputs[0].address).toBe('bnb1g4wdwdj0x9gcggluxq6hrxgm4rw4evxjv3h6yw');
  expect(decodedTx.msg[0].outputs[0].coins[0].amount).toBe(55883000000);
  expect(decodedTx.msg[0].outputs[0].coins[0].denom).toBe('AVA-645');
  expect(decodedTx.signatures[0].account_number).toBe(327470);
  expect(decodedTx.signatures[0].pub_key.value).toBe('AwUYrrk9ydvw4TBVSEEDruVecQMQ1oHRswvS+Vhnb0od');
  expect(decodedTx.signatures[0].sequence).toBe(408);
  expect(decodedTx.signatures[0].signature).toBe(
    'DxNg8ziyGPHKloljcrOvW5VJ+FdMO/cpn2EU7kiZuSVZ9XReE8sTZ+RfTPiGOyyHe+JyenhDwIcLpGq8deismg=='
  );
  expect(decodedTx.source).toBe(0);
  expect(decodedTx.memo).toBe('AVA_REF_000414');
  expect(decodedTx.data).toBe('');
  expect(typeof decodedTx).toBe('object');
  expect(decodedTx).toHaveProperty('msg');
  expect(decodedTx).toHaveProperty('signatures');
  expect(decodedTx).toHaveProperty('msgType');

  let decodedTx2 = decoder.decodeTransfer(bnbSend);
  expect(JSON.stringify(decodedTx)).toBe(JSON.stringify(decodedTx2));
}, 3000);

test('transfer3', () => {
  let bnbSend =
    'E101F0625DEE0A582A2C87FA0A280A141DF41198F5AB4D05561537A4E54ACA6E382F84D212100A074156412D36343510808CB2CFAA0312280A14455CD7364F31518423FC303571991BA8DD5CB0D212100A074156412D36343510808CB2CFAA0312710A26EB5AE9872103D9EE79E561BEC8706566BB907208BB90A3A7EB5414F36E7F403E891BEA90EF3A12409AAB0D5111577B7F7DB653B75C85ABF5F07824364C1BB69AD4D54C214DD3D1C1058A6205ABA2225F700BD8B7F1E97376898755790CB55B8211B69E9892A8EEE21883A11420BF021A0C4156415F445F3032313931312002';
  let decodedTx = decoder.decode(bnbSend);
  expect(decodedTx.msg[0].inputs[0].address).toBe('bnb1rh6prx844dxs24s4x7jw2jk2dcuzlpxjtqrng5');
  expect(decodedTx.msg[0].inputs[0].coins[0].amount).toBe(114520000000);
  expect(decodedTx.msg[0].inputs[0].coins[0].denom).toBe('AVA-645');
  expect(decodedTx.msg[0].outputs[0].address).toBe('bnb1g4wdwdj0x9gcggluxq6hrxgm4rw4evxjv3h6yw');
  expect(decodedTx.msg[0].outputs[0].coins[0].amount).toBe(114520000000);
  expect(decodedTx.msg[0].outputs[0].coins[0].denom).toBe('AVA-645');
  expect(decodedTx.signatures[0].account_number).toBe(331907);
  expect(decodedTx.signatures[0].sequence).toBe(319);
  expect(decodedTx.source).toBe(2);
  expect(decodedTx.memo).toBe('AVA_D_021911');
  expect(decodedTx.data).toBe('');
  expect(typeof decodedTx).toBe('object');
  expect(decodedTx).toHaveProperty('msg');
  expect(decodedTx).toHaveProperty('signatures');
  expect(decodedTx).toHaveProperty('msgType');

  let decodedTx2 = decoder.decodeTransfer(bnbSend);
  expect(JSON.stringify(decodedTx)).toBe(JSON.stringify(decodedTx2));
}, 3000);

test('transferBNB', () => {
  let bnbSend =
    'C801F0625DEE0A4E2A2C87FA0A230A141DF41198F5AB4D05561537A4E54ACA6E382F84D2120B0A03424E4210C0C394CB0512230A14EEB57E07FE35250055186EEFF98CDEBD7E5F5C7A120B0A03424E4210C0C394CB0512700A26EB5AE9872103D9EE79E561BEC8706566BB907208BB90A3A7EB5414F36E7F403E891BEA90EF3A12401872AAB9EA00B0F2A2D259D52EEDFECB79925F8E952FFED6A5B91799FA0C4632483B8F53B630B9E133EE375AF01B3447BAAA792A8536E3252A241A6340696D6A1883A114200E2002';
  let decodedTx = decoder.decode(bnbSend);
  expect(decodedTx.msg[0].inputs[0].address).toBe('bnb1rh6prx844dxs24s4x7jw2jk2dcuzlpxjtqrng5');
  expect(decodedTx.msg[0].inputs[0].coins[0].amount).toBe(1499800000);
  expect(decodedTx.msg[0].inputs[0].coins[0].denom).toBe('BNB');
  expect(decodedTx.msg[0].outputs[0].address).toBe('bnb1a66hupl7x5jsq4gcdmhlnrx7h4l97hr6uvuhtq');
  expect(decodedTx.msg[0].outputs[0].coins[0].amount).toBe(1499800000);
  expect(decodedTx.msg[0].outputs[0].coins[0].denom).toBe('BNB');
  expect(decodedTx.signatures[0].account_number).toBe(331907);
  expect(decodedTx.signatures[0].sequence).toBe(14);
  expect(decodedTx.source).toBe(2);
  expect(decodedTx.memo).toBe('');
  expect(decodedTx.data).toBe('');
  expect(typeof decodedTx).toBe('object');
  expect(decodedTx).toHaveProperty('msg');
  expect(decodedTx).toHaveProperty('signatures');
  expect(decodedTx).toHaveProperty('msgType');

  let decodedTx2 = decoder.decodeTransfer(bnbSend);
  expect(JSON.stringify(decodedTx)).toBe(JSON.stringify(decodedTx2));
}, 3000);
