"use client"
import { useState } from "react"

export default function Home() {
  const [story, setStory] = useState(null)
  const stories = [
    "I have kitties, 4 of them. one is named hobbsey. one is named chunky. one is named marty. one is named kitten it also includes a water slide with an Escalator to the top.  There are two slides. One of these slides is at the top, and is called the Marty Slide, or the Kitten Slide.The other slide is in a small building to the left.  The kitties are orange tabby with about 4 inch long tails. They are all overweight. Chunky is the heaviest.  We ride some rides, eat some cat food, and have fun.  The end"
    ,
    `Maria and Sarah had been friends since childhood. They were inseparable, sharing everything from secrets to dreams. As they grew older, love blossomed between them. Despite their close bond, they never acted on their feelings.
    \n
    One day, a handsome man named Chris entered their lives. Chris was a free spirit, always looking for adventure and the next thrill. Maria and Sarah were both attracted to him, but neither wanted the other to know.
    \n
    After a few months, Chris had to leave town on business. He promised to keep in touch, and he did—calling and writing to both Maria and Sarah. But as time went on, it became clear that he had feelings for one of them.
    \n
    One day, Chris sent Maria and Sarah a single letter. In it, he declared his love for Maria, and asked her to marry him. Maria was overjoyed, but Sarah was heartbroken. She had secretly been in love with Chris as well.
    \n
    Despite her heartache, Sarah was happy for Maria. She smiled through the tears and gave her blessing to their union. Maria and Chris were married shortly after, and Sarah remained a loyal and supportive friend.
    \n
    Their love story was one of friendship, heartache, and ultimately, true love. Maria and Chris were together for the rest of their lives, and Sarah was always there to share in their joy.`
    ,
    `Faisal is a businessman who is also an entrepreneur and philanthropist. He is a kind, generous and thoughtful person who is passionate about helping others. He is a romantic at heart and loves to spend time with his seven women.
    \n
    The first woman in Faisal’s life is his mother. She is a strong and independent woman who has been a source of strength and support for Faisal ever since he was a child. She raised him to be a kind and compassionate man and Faisal cherishes the relationship that they have.
    \n
    The second woman in Faisal’s life is his wife. Faisal and his wife have been married for several years and have a healthy and loving marriage. They are both very supportive of each other and Faisal is very thankful to have her in his life.
    \n
    The third woman in Faisal’s life is his sister. She is his confidant and best friend who is always there for him in times of trouble. She is a source of strength and comfort for Faisal and he loves her dearly.
    \n
    The fourth woman in Faisal’s life is his daughter. She is the apple of his eye and Faisal loves spending time with her. He encourages her to pursue her dreams and is always there to lend a helping hand.
    \n
    The fifth woman in Faisal’s life is his grandmother. She is a wise and loving woman who has been a source of wisdom and guidance for Faisal ever since he was a child. He loves her dearly and cherishes the time they spend together.
    \n
    The sixth woman in Faisal’s life is his mistress. She is a beautiful and passionate woman who has captivated Faisal’s heart. He loves spending time with her and cherishes the moments they share.
    \n
    Finally, the seventh woman in Faisal’s life is his best friend. She is someone who has been there for him through thick and thin. She is a source of comfort and support for Faisal and he cherishes their friendship.
    \n
    This is the story of Faisal and his seven women. A love story unlike any other, one that is full of love, hope, and happiness. A story that shows us that true love can be found in the most unexpected places.`
    ,
    `Once upon a time, there were seven children who were all siblings. They lived in a small, rural town in the south, but they were in need of a new home. With the help of some generous friends and family, the seven children were able to move to a small house in Tennessee.
    \n
    The children were all excited to start a new life in their new home. They had never seen the beauty of Tennessee before and they were in awe of its rolling hills, lush forests, and stunning lakes.
    \n
    When they first moved in, the children were in for some culture shock. The people in the town seemed a bit strange to them and the language was different. But the children quickly adapted and they learned to love their new home.
    \n
    They quickly made friends with the locals and they started to feel more and more at home. The children found joy in exploring the nearby woods and swimming in the lakes. They learned the local language and customs and they even made a few of their own.
    \n
    The children settled into the small house and it quickly became their home. They went to school, worked hard on their chores, and created a wonderful family life in their new home.
    \n
    The children were so happy to have found a new home in Tennessee and they felt truly blessed. They all looked forward to a bright future in the Volunteer State.`
    ,
    `10,000 people from all around the world rose up and unified together to confront Russia. This epic quest wasn't started for any external reason. This was done as a way to strengthen the bonds between all peoples of the world, as well as to demonstrate their power to their own countries. With the strength of all of the people united, the small army of 10,000 people set off determined to face the power of Russia.
    \n
    The journey was not easy. The winter days were long and there were few resources to aid them in their journey. Despite this, the group pushed forward and eventually reached the Russian border. They sent word back to their own countries of their plans and bided their time as their forces multiplied.
    \n
    At last, the day came to face the Russian army. In an incredible show of courage and strength, the 10,000 raised their voices against the massive military force. Through sheer willpower, the small army was able to succeed in their mission, taking Russian forces by surprise.
    \n
    The news quickly spread across the world. No one could have imagined that 10,000 people could overthrow a superpower. This small group of people had become more than just a symbol of unity - they had become an example of what is possible when people come together with a common purpose.
    \n
    In the days that followed, the 10,000 regained control of Russia and inspired other countries to come together and fight for their basic rights and freedoms. Although the 10,000 are long gone, their legacy remains today, reminding people everywhere of the power of unity and the capacity of small people to make a lasting difference in the world.`
    ,
    `Once upon a time in a small village, there lived a peculiar cat named Stella. Unlike any other cat in the village, Stella possessed magical abilities. She had emerald green eyes that twinkled with enchantment and a sleek black fur that shimmered under the moonlight.
    \n
    Stella's magic was strongest during the night, when the stars illuminated the sky. She would traverse the village, using her abilities to help those in need. News of Stella's extraordinary powers spread far and wide, making her an emblem of hope and wonder.
    \n
    One moonlit evening, a young girl named Emily was strolling through the village square, feeling overwhelmed by the hardships she faced. Emily's family was struggling to make ends meet, and she longed for a way to bring prosperity to their lives. Lost in her thoughts, Emily stumbled upon Stella, who appeared to be waiting for her.
    \n
    "Greetings, young Emily," the cat mewed softly. "I sense your heart's desires. Fear not, for I am here to help."
    \n
    Emily's eyes widened in astonishment. She had heard tales of Stella's magic but never imagined having the opportunity to meet her. She poured her heart out to the cat, expressing her family's struggles and her deepest wishes for a brighter future.
    \n
    Stella nodded knowingly and shared a secret. "Emily, my magic is connected to the dreams and aspirations of the villagers. However, I can only assist those whose intentions are pure and selfless. Tell me, what are your truest desires?"
    \n
    With sincerity in her eyes, Emily declared, "I wish for enough food and resources to provide for my family, and for the entire village to thrive. I want every person here to be free from suffering and to live in harmony."
    \n
    Stella purred approvingly. "Your wishes hold purity and compassion, young Emily. I shall grant them, but only with the understanding that it is the village's collective effort to sustain the prosperity."
    \n
    From that moment on, Stella has shared her magic with the village, providing an abundance of crops, pure drinking water, and healing powers to those who were sick. The villagers were filled with gratitude and cooperation. They came together, working as a unified force to nurture their newfound prosperity. The harmony and happiness that flowed through the village was remarkable.
    \n
    Years passed, and Emily had grown into a wise and revered village elder. Stella, now much older herself, continued to wander through the village, witnessing the prosperity that her magic had brought.
    \n
    One evening, as Emily sat under a tree, reflecting on the miracles Stella had worked, the cat approached her, her emerald eyes filled with a sense of farewell. "Emily, it is time for me to leave this realm and pass on my magic to another. But remember, the true magic lies within the hearts of those who dare to dream and believe."
    \n
    Emily's eyes welled up with tears as she thanked Stella for her extraordinary gifts. With a gentle smile, Stella vanished into thin air, leaving behind a sense of wonder and memories that would forever be cherished.
    \n
    The village, forever grateful for Stella's benevolence, continued to flourish, united in the understanding that the real magic was the power of compassion, unity, and selflessness. And so, Stella's legacy lived on, inspiring generations to embrace the enchantment that resided within their hearts.`
    ,
    
  ]
  function generate(e) {
    e.preventDefault()
    setStory(stories[Math.round(Math.random() * (stories.length-1))])
    console.log(story)
  }
  return (
    <div className="ggg">
      <button onClick={generate}>Generate a Story</button>
      <br /><br />
      {story}
    </div>
  )
}
