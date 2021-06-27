import React from 'react';
import pick from 'lodash.pick'
import TextField from '@material-ui/core/TextField';
import { withFormsy } from 'formsy-react';


function TextFieldFormsy(props: any) {
	const importedProps = pick(props, [
		'autoComplete',
		'autoFocus',
		'children',
		'className',
		'defaultValue',
		'disabled',
		'FormHelperTextProps',
		'fullWidth',
		'id',
		'InputLabelProps',
		'inputProps',
		'InputProps',
		'inputRef',
		'label',
		'multiline',
		'name',
		'onBlur',
		'onChange',
		'onFocus',
		'placeholder',
		'required',
		'rows',
		'rowsMax',
		'select',
		'SelectProps',
		'type',
		'variant'
	]);

	function changeValue(event: any) {
		props.setValue(event.currentTarget.value);
		if (props.onChange) {
			props.onChange(event);
		}
	}

	return (
		<TextField
			{...importedProps}
			onChange={changeValue}
			value={props.value}
			error={Boolean(props.errorMessage)}
			helperText={props.errorMessage}
		/>
	);
}

export default React.memo(withFormsy(TextFieldFormsy));
