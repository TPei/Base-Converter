'''
decode a number from any base to base 10
'''
def decode(number, source_base):
	result = 0
	number_of_digits = len(number)
	for index in range (0, number_of_digits):
		digit = number[index]
		result = result + int(digit) * pow(source_base, index)

	return result


if __name__ == '__main__':
	print 'Encoding a number from any base to base ten...'
	# number needs to be reversed because we want to go through right to left
	number = raw_input('Choose a number to convert: ')[::-1]
	base = int(raw_input('Choose a base to convert from: '))

	print decode(number, base)