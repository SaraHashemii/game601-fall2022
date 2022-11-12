"Death Eaters Attack" by Sara Bayat Hashemi

Release along with the "Quixe" interpreter.


When play begins:
	say "[paragraph break] [Bold type]  - Welcome to Hogwarts [paragraph break] [Italic type] Hey muggle, you better find the Dumbledore's Army or Death Eaters will kill you![paragraph break]"; now the left hand status line is "Welcome to Hogwarts ";
	
The display banner rule is listed before the when play begins stage rule in the startup rules.

The player is in the Gryffindor common.

The deatheatersArrivalTime is a number variable. The deatheatersArrivalTime is 15.


Every turn:
	say "[paragraph break]There [if deatheatersArrivalTime is 1]is[else]are[end if] [deatheatersArrivalTime] minutes to Death Eaters attack![paragraph break]";

Every turn when the player is carrying the wand:	
       now the deatheatersArrivalTime is deatheatersArrivalTime - 1;
			
Every turn when deatheatersArrivalTime is less than 1:
	end the story saying "[italic type] You didn't make it to find Dumbledore's Army and You were killed by Death Eaters!";
	  	
 	
Every turn when the player has the Gryffindor sword and the player is in the corridor:
       say "[italic type] A secret door appears... as Dumbledore said, the room of requirements appears when you're in very great need of it and contains what you need at that time. So congratulation, make it here. here is the Dumbledore's Army practicing spells. "; 
	    end the story saying "Congratulations! you found Dumbledore's Army and you will defeat the death eaters";
	
after unlocking the wooden chest with the wand:
	say "Alohomora! the chest unlocked.."


after taking  the crystal ball:
	say  "You see a vision of Dumbledore saying, you need to find the Gryffindor sword, and then you will find your path! " 

after unlocking the office door with the wand:
	say "Alohomora! the door unlocked.."	

after taking the wand :
	say " You have taken a dead wizard's wand who was murdered by a death eater. The murderer death eater is the owner of this wand now, and he is on his way with his army to attack Hogwarts."
	

		 
[ROOMS AND LAYOUT]

The Gryffindor common is a room. 
The Divination classroom is a room.  
The Headmaster's office is a room.

The classroom door is a closed door. 
The classroom door is east of the corridor.

The office door is a locked door. 
The office door is north of the corridor.


[Gryffindor common] 

The description of the Gryffindor common is "  It's a circular room where Gryffindor students could relax after a long day of studying. It's full of squashy armchairs, tables, and a notice board where school notices, ads, lost posters, etc., could be posted. "

The Gryffindor common is south of the corridor.

The notice board is a fixed in place thing in the Gryffindor common. 

The poster is a thing. It is on the notice board. The description of the poster is " Dead Eaters broke out from Azkaban!"


[corridor] 

The description of the corridor is " On your east is the Divination classroom and on the north is Headmaster's office." 
	

[Divination classroom] 

The description of the Divination classroom is "  It teaches methods of divining the future or gathering insights into future events, through various rituals and tools. The magic taught in this class, as well as the ability to say prophetic things was a branch of magic referred to as Divination."


The Divination classroom is east of the classroom door.

The circular table is a fixed in place thing in the Divination classroom. 

The wand is a thing. the wand is on the table. wand unlocks the wooden chest and the office door.

The wooden chest is a locked container in the Divination classroom.

The crystal ball is a thing. It is inside the wooden chest. 

	
[Headmaster's office]

The description of the Headmaster's office is "It is a large circular room with many windows and many portraits of old Headmasters and Headmistresses." 

Instead of entering the office:
	say "The sorting hat is on the shelf... .";
		
The Headmaster's office is north of the office door.

The shelf is a fixed in place thing in the Headmaster's office.

The sorting hat is a container. The sorting hat is on the shelf.

The Gryffindor sword is a thing. The Gryffindor sword is in the sorting hat.


[TESTS]
Test win with " read the poster/ go north/ n/ open the classroom door/ enter the classroom / take the wand/ open the chest/ unlock the chest with the wand /open the chest / take the crystal ball/ go west / w/ open office door / unlock the office door with the wand/ open the office door/ enter the office/ take the hat / examine the hat/ take the sword/ go south/ s/ ".
