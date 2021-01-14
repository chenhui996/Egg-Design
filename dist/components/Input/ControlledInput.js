import React, { useState } from 'react';
import { Input } from './input';
export var ControlledInput = function () {
    var _a = useState('controlled input'), value = _a[0], setValue = _a[1];
    return React.createElement(Input, { value: value, onChange: function (e) { setValue(e.target.value); } });
};
