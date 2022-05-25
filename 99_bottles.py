def bottle_song(num):
	bottles_of_beer = num
	
	while bottles_of_beer > 1: 
		print(f"{bottles_of_beer} bottles of beer on the wall, {bottles_of_beer} bottles of beer.\nTake one down and pass it around, {bottles_of_beer - 1} bottles of beer on the wall.")
		bottles_of_beer -= 1 
	
	if num == 1:
		print(f"{bottles_of_beer} bottle of beer on the wall.\n{bottles_of_beer} bottle of beer on the wall, {bottles_of_beer} bottle of beer.\nTake one down and pass it around, no more bottles of beer on the wall.\nNo more bottles of beer on the wall, no more bottles of beer.\nGo to the store and buy some more, 99 bottles of beer on the wall.")
 	

	

bottle_song(10)
