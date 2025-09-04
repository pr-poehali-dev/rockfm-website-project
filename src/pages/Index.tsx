import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import Icon from '@/components/ui/icon';

const Index = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [volume, setVolume] = useState(75);
  
  const currentTrack = {
    artist: 'Metallica',
    song: 'Master of Puppets',
    album: 'Master of Puppets (1986)'
  };
  
  const playlists = [
    { name: 'Heavy Metal Classics', tracks: 45, image: '/img/a20e4a25-be68-4210-9fa1-a803b0c5faff.jpg' },
    { name: 'Rock Anthems', tracks: 32, image: '/img/a20e4a25-be68-4210-9fa1-a803b0c5faff.jpg' },
    { name: 'Underground Metal', tracks: 28, image: '/img/a20e4a25-be68-4210-9fa1-a803b0c5faff.jpg' }
  ];
  
  const interviews = [
    { artist: 'Iron Maiden', date: '15 авг 2024', duration: '45 мин' },
    { artist: 'Black Sabbath', date: '8 авг 2024', duration: '32 мин' },
    { artist: 'Judas Priest', date: '1 авг 2024', duration: '38 мин' }
  ];

  return (
    <div className="min-h-screen bg-rock-black text-rock-white">
      {/* Header */}
      <header className="border-b border-rock-gray p-6">
        <div className="container mx-auto flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <img src="/img/a20e4a25-be68-4210-9fa1-a803b0c5faff.jpg" alt="Rock FM" className="w-12 h-12 rounded" />
            <div>
              <h1 className="text-3xl font-bold rock-title text-rock-red">ROCK FM</h1>
              <p className="text-rock-gray rock-text">Только рок, только хардкор</p>
            </div>
          </div>
          <nav className="flex space-x-6 rock-text">
            <a href="#live" className="hover:text-rock-red transition-colors">Эфир</a>
            <a href="#playlists" className="hover:text-rock-red transition-colors">Плейлисты</a>
            <a href="#archive" className="hover:text-rock-red transition-colors">Архив</a>
            <a href="#contacts" className="hover:text-rock-red transition-colors">Контакты</a>
          </nav>
        </div>
      </header>

      {/* Hero Section with Live Player */}
      <section id="live" className="py-12">
        <div className="container mx-auto px-6">
          <div className="text-center mb-8">
            <h2 className="text-5xl font-bold mb-4 gothic-title text-rock-red">ЖИВОЙ ЭФИР</h2>
            <p className="text-xl text-rock-gray rock-text">В эфире лучшее из мира рока и металла</p>
          </div>
          
          {/* Live Player */}
          <Card className="max-w-2xl mx-auto bg-rock-dark-gray border-rock-gray">
            <CardHeader className="text-center">
              <div className="flex items-center justify-center space-x-2 mb-2">
                <div className="w-3 h-3 bg-rock-red rounded-full animate-pulse"></div>
                <Badge variant="destructive" className="bg-rock-red text-rock-white">В ЭФИРЕ</Badge>
              </div>
              <CardTitle className="rock-title text-2xl text-rock-white">
                {currentTrack.artist} - {currentTrack.song}
              </CardTitle>
              <p className="text-rock-gray rock-text">{currentTrack.album}</p>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                {/* Control Buttons */}
                <div className="flex justify-center space-x-4">
                  <Button
                    variant={isPlaying ? "secondary" : "default"}
                    size="lg"
                    className="bg-rock-red hover:bg-red-700 text-rock-white px-8"
                    onClick={() => setIsPlaying(!isPlaying)}
                  >
                    <Icon name={isPlaying ? "Pause" : "Play"} className="mr-2" />
                    {isPlaying ? "Пауза" : "Слушать"}
                  </Button>
                  <Button variant="outline" size="lg" className="border-rock-red text-rock-red hover:bg-rock-red hover:text-rock-white">
                    <Icon name="Volume2" className="mr-2" />
                    {volume}%
                  </Button>
                </div>
                
                {/* Progress Bar */}
                <div className="space-y-2">
                  <div className="w-full bg-rock-gray rounded-full h-2">
                    <div className="bg-rock-red h-2 rounded-full w-1/3"></div>
                  </div>
                  <div className="flex justify-between text-sm text-rock-gray rock-text">
                    <span>2:15</span>
                    <span>6:42</span>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      <Separator className="bg-rock-gray" />

      {/* Playlists Section */}
      <section id="playlists" className="py-12">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold mb-8 text-center rock-title text-rock-red">ПЛЕЙЛИСТЫ</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {playlists.map((playlist, index) => (
              <Card key={index} className="bg-rock-dark-gray border-rock-gray hover:border-rock-red transition-colors">
                <CardHeader>
                  <img src={playlist.image} alt={playlist.name} className="w-full h-48 object-cover rounded-lg mb-4" />
                  <CardTitle className="rock-text text-rock-white">{playlist.name}</CardTitle>
                  <p className="text-rock-gray rock-text">{playlist.tracks} треков</p>
                </CardHeader>
                <CardContent>
                  <Button className="w-full bg-rock-red hover:bg-red-700 text-rock-white rock-text">
                    <Icon name="Play" className="mr-2" />
                    Слушать
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <Separator className="bg-rock-gray" />

      {/* Archive Section */}
      <section id="archive" className="py-12">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold mb-8 text-center rock-title text-rock-red">АРХИВ ИНТЕРВЬЮ</h2>
          <div className="max-w-3xl mx-auto space-y-4">
            {interviews.map((interview, index) => (
              <Card key={index} className="bg-rock-dark-gray border-rock-gray hover:border-rock-red transition-colors">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="text-xl font-bold rock-text text-rock-white">Интервью с {interview.artist}</h3>
                      <p className="text-rock-gray rock-text">{interview.date} • {interview.duration}</p>
                    </div>
                    <Button variant="outline" className="border-rock-red text-rock-red hover:bg-rock-red hover:text-rock-white">
                      <Icon name="Play" className="mr-2" />
                      Слушать
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <Separator className="bg-rock-gray" />

      {/* Contacts Section */}
      <section id="contacts" className="py-12">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold mb-8 text-center rock-title text-rock-red">КОНТАКТЫ</h2>
          <div className="max-w-2xl mx-auto">
            <Card className="bg-rock-dark-gray border-rock-gray">
              <CardContent className="p-8 space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-4">
                    <div className="flex items-center space-x-3">
                      <Icon name="Phone" className="text-rock-red" />
                      <div>
                        <p className="font-bold rock-text text-rock-white">Студия</p>
                        <p className="text-rock-gray rock-text">+7 (495) 123-45-67</p>
                      </div>
                    </div>
                    <div className="flex items-center space-x-3">
                      <Icon name="Mail" className="text-rock-red" />
                      <div>
                        <p className="font-bold rock-text text-rock-white">Email</p>
                        <p className="text-rock-gray rock-text">info@rockfm.ru</p>
                      </div>
                    </div>
                  </div>
                  <div className="space-y-4">
                    <div className="flex items-center space-x-3">
                      <Icon name="MapPin" className="text-rock-red" />
                      <div>
                        <p className="font-bold rock-text text-rock-white">Адрес</p>
                        <p className="text-rock-gray rock-text">Москва, ул. Рок-н-Ролл, 101</p>
                      </div>
                    </div>
                    <div className="flex items-center space-x-3">
                      <Icon name="Clock" className="text-rock-red" />
                      <div>
                        <p className="font-bold rock-text text-rock-white">Эфир</p>
                        <p className="text-rock-gray rock-text">24/7 без перерыва</p>
                      </div>
                    </div>
                  </div>
                </div>
                
                <Separator className="bg-rock-gray" />
                
                <div className="text-center">
                  <p className="text-rock-gray rock-text mb-4">Следите за нами в соцсетях</p>
                  <div className="flex justify-center space-x-4">
                    <Button variant="outline" size="icon" className="border-rock-red text-rock-red hover:bg-rock-red hover:text-rock-white">
                      <Icon name="Facebook" />
                    </Button>
                    <Button variant="outline" size="icon" className="border-rock-red text-rock-red hover:bg-rock-red hover:text-rock-white">
                      <Icon name="Instagram" />
                    </Button>
                    <Button variant="outline" size="icon" className="border-rock-red text-rock-red hover:bg-rock-red hover:text-rock-white">
                      <Icon name="Youtube" />
                    </Button>
                    <Button variant="outline" size="icon" className="border-rock-red text-rock-red hover:bg-rock-red hover:text-rock-white">
                      <Icon name="Twitter" />
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-rock-dark-gray border-t border-rock-gray py-8">
        <div className="container mx-auto px-6 text-center">
          <p className="text-rock-gray rock-text">
            © 2024 ROCK FM. Все права защищены. Rock never dies! 🤘
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;