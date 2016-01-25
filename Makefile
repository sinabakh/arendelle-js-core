lexparser:
	@echo 'Compiling LexParser!'
	jison ./Jison/LexParse.jison --outfile ./Jison/LexParse.js

arendelle:
	@echo 'Compiling Arendelle!'
	tsc --out Arendelle.js