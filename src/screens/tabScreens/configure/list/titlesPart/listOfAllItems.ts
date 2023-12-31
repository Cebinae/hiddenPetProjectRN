const items = [
    'USP-S | Forest Leaves',  //list of supported sknins
    'USP-S | Night Ops',      //that already used by validation
    'USP-S | Flashback',
    'USP-S | Torque',          // usp, glock, awp, ak, m4a4
    'USP-S | Check Engine',     //consider using json instead...
    'USP-S | Lead Conduit',
    'USP-S | Ticket to Hell',
    'USP-S | Blood Tiger',
    'USP-S | Guardian',
    'USP-S | Cyrex',
    'USP-S | Black Lotus',
    'USP-S | Purple DDPAT',
    'USP-S | Cortex',
    'USP-S | Para Green',
    'USP-S | Pathfinder',
    'USP-S | Stainless',
    'USP-S | Monster Mashup',
    'USP-S | Blueprint',
    'USP-S | Orange Anolis',
    'USP-S | Ancient Visions',
    'USP-S | Road Rash',
    'USP-S | Royal Blue',
    'USP-S | Neo-Noir',
    'USP-S | Serum',
    'USP-S | Business Class',
    'USP-S | Orion',
    'USP-S | Caiman',
    'USP-S | The Traitor',
    'USP-S | Dark Water',
    'USP-S | Overgrowth',
    'USP-S | Whiteout',
    'USP-S | Target Acquired',
    'USP-S | Kill Confirmed',
    'USP-S | Printstream',
    'Glock-18 | Death Rattle',
    'Glock-18 | Oxide Blaze',
    'Glock-18 | High Beam',
    'Glock-18 | Clear Polymer',
    'Glock-18 | Off World',
    'Glock-18 | Warhawk',
    'Glock-18 | Winterized',
    'Glock-18 | Wraiths',
    'Glock-18 | Ironwork',
    'Glock-18 | Bunsen Burner',
    'Glock-18 | Catacombs',
    'Glock-18 | Moonrise',
    'Glock-18 | Candy Apple',
    'Glock-18 | Red Tire',
    'Glock-18 | Sacrifice',
    'Glock-18 | Grinder',
    'Glock-18 | Weasel',
    'Glock-18 | Steel Disruption',
    'Glock-18 | Royal Legion',
    'Glock-18 | Wasteland Rebel',
    'Glock-18 | Blue Fissure',
    'Glock-18 | Vogue',
    'Glock-18 | Nuclear Garden',
    'Glock-18 | Reactor',
    'Glock-18 | Water Elemental',
    'Glock-18 | Snack Attack',
    'Glock-18 | Gamma Doppler',
    'Glock-18 | Franklin',
    'Glock-18 | Brass',
    'Glock-18 | Groundwater',
    'Glock-18 | Neo-Noir',
    'Glock-18 | Pink DDPAT',
    'Glock-18 | Sand Dune',
    'Glock-18 | Bullet Queen',
    'Glock-18 | Twilight Galaxy',
    'Glock-18 | Dragon Tattoo',
    'Glock-18 | Synth Leaf',
    'Glock-18 | Fade',
    'AWP | Pit Viper',
    'AWP | Capillary',
    'AWP | Worm God',
    'AWP | Safari Mesh',
    'AWP | Phobos',
    'AWP | Acheron',
    'AWP | POP AWP',
    'AWP | PAW',
    'AWP | Exoskeleton',
    'AWP | Mortis',
    'AWP | Fever Dream',
    'AWP | Atheris',
    'AWP | Sun in Leo',
    'AWP | Elite Build',
    "AWP | Man-o'-war",
    'AWP | Corticera',
    'AWP | Neo-Noir',
    'AWP | Redline',
    'AWP | Electric Hive',
    'AWP | Chromatic Aberration',
    'AWP | Hyper Beast',
    'AWP | Pink DDPAT',
    'AWP | Wildfire',
    'AWP | Asiimov',
    'AWP | Graphite',
    'AWP | Snake Camo',
    'AWP | Silk Tiger',
    'AWP | BOOM',
    'AWP | Containment Breach',
    'AWP | Oni Taiji',
    'AWP | Lightning Strike',
    'AWP | Fade',
    'AWP | Desert Hydra',
    'AWP | The Prince',
    'AWP | Medusa',
    'AWP | Gungnir',
    'AWP | Dragon Lore',
    'AK-47 | Uncharted',
    'AK-47 | Safari Mesh',
    'AK-47 | Elite Build',
    'AK-47 | Blue Laminate',
    'AK-47 | Rat Rod',
    'AK-47 | Safety Net',
    'AK-47 | Slate',
    'AK-47 | Green Laminate',
    'AK-47 | Phantom Disruptor',
    'AK-47 | Baroque Purple',
    'AK-47 | Cartel',
    'AK-47 | Emerald Pinstripe',
    'AK-47 | Orbit Mk01',
    'AK-47 | Legion of Anubis',
    'AK-47 | Point Disarray',
    'AK-47 | Predator',
    'AK-47 | Red Laminate',
    'AK-47 | Leet Museo',
    'AK-47 | Frontside Misty',
    'AK-47 | Ice Coaled',
    'AK-47 | Neon Revolution',
    'AK-47 | Jungle Spray',
    'AK-47 | Redline',
    'AK-47 | Aquamarine Revenge',
    'AK-47 | First Class',
    'AK-47 | Bloodsport',
    'AK-47 | The Empress',
    'AK-47 | Neon Rider',
    'AK-47 | Jaguar',
    'AK-47 | Nightwish',
    'AK-47 | Black Laminate',
    'AK-47 | Wasteland Rebel',
    'AK-47 | Asiimov',
    'AK-47 | Panthera onca',
    'AK-47 | Case Hardened',
    'AK-47 | Fuel Injector',
    'AK-47 | Jet Set',
    'AK-47 | Vulcan',
    'AK-47 | X-Ray',
    'AK-47 | Hydroponic',
    'AK-47 | Gold Arabesque',
    'AK-47 | Fire Serpent',
    'AK-47 | Wild Lotus',
    'M4A4 | Mainframe',
    'M4A4 | Poly Mag',
    'M4A4 | Magnesium',
    'M4A4 | Converter',
    'M4A4 | Urban DDPAT',
    'M4A4 | Global Offensive',
    'M4A4 | Evil Daimyo',
    'M4A4 | Griffin',
    'M4A4 | Faded Zebra',
    'M4A4 | Desert-Strike',
    'M4A4 | Tooth Fairy',
    'M4A4 | The Battlestar',
    'M4A4 | Spider Lily',
    'M4A4 | Dark Blossom',
    'M4A4 | X-Ray',
    'M4A4 | Desolate Space',
    'M4A4 | Dragon King',
    'M4A4 | Red DDPAT',
    'M4A4 | Zirka',
    'M4A4 | Jungle Tiger',
    'M4A4 | Tornado',
    'M4A4 | Desert Storm',
    'M4A4 | Buzz Kill',
    'M4A4 | Neo-Noir',
    'M4A4 | Cyber Security',
    'M4A4 | In Living Color',
    'M4A4 | Bullet Rain',
    'M4A4 | Hellfire',
    'M4A4 | Royal Paladin',
    'M4A4 | The Emperor',
    'M4A4 | Asiimov',
    'M4A4 | Modern Hunter',
    'M4A4 | Daybreak',
    'M4A4 | Radiation Hazard',
    'M4A4 | The Coalition',
    'M4A4 | Poseidon',
    'M4A4 | Howl'

]

const validItems = items.map((elem) => elem.toUpperCase().trim())  // сука а вызвать туапперкейс еблан блять

export default validItems 

