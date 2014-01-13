'''
encode a base ten number to any given base
'''
def encode(number, target_base):
	divider = number
	result = ''

	while divider > 0:
		temp, rest = divmod(divider, target_base)
		result = str(rest) + result
		divider = temp

	return result


if __name__ == '__main__':
	print 'Encode a base ten number to any base...'
	number = int(raw_input('Choose a number to convert: '))
	base = int(raw_input('Choose a base to convert to: '))
	print encode(number, base)