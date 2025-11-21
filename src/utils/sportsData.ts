export type Sport = 'tennis' | 'hockey' | 'basketball' | 'volleyball';

export interface Match {
  id: string;
  sport: Sport;
  homeTeam: string;
  awayTeam: string;
  homeScore: number;
  awayScore: number;
  odds: number;
  timeRemaining?: string;
  sets?: { home: number; away: number };
  games?: { home: number; away: number };
  sourceUrl: string;
}

// Tennis names
const tennisPlayers = [
  'Novak Djokovic', 'Carlos Alcaraz', 'Daniil Medvedev', 'Jannik Sinner',
  'Andrey Rublev', 'Stefanos Tsitsipas', 'Holger Rune', 'Taylor Fritz',
  'Casper Ruud', 'Alexander Zverev', 'Hubert Hurkacz', 'Tommy Paul'
];

// Hockey teams
const hockeyTeams = [
  'Toronto Maple Leafs', 'Boston Bruins', 'Tampa Bay Lightning', 'Florida Panthers',
  'New York Rangers', 'Carolina Hurricanes', 'Vegas Golden Knights', 'Edmonton Oilers',
  'Colorado Avalanche', 'Dallas Stars', 'Vancouver Canucks', 'Los Angeles Kings'
];

// Basketball teams
const basketballTeams = [
  'Lakers', 'Celtics', 'Warriors', 'Nets', 'Bucks', 'Heat',
  'Suns', '76ers', 'Nuggets', 'Mavericks', 'Clippers', 'Grizzlies'
];

// Volleyball teams
const volleyballTeams = [
  'Zenit Kazan', 'Trentino', 'Lube Civitanova', 'Perugia',
  'Modena', 'Milano', 'ZAKSA', 'Berlin Recycling', 'Fenerbahçe', 'Galatasaray'
];

function getRandomElement<T>(array: T[]): T {
  return array[Math.floor(Math.random() * array.length)];
}

function generateTennisMatch(): Match | null {
  const player1 = getRandomElement(tennisPlayers);
  let player2 = getRandomElement(tennisPlayers);
  while (player2 === player1) {
    player2 = getRandomElement(tennisPlayers);
  }

  const sets = {
    home: Math.floor(Math.random() * 3),
    away: Math.floor(Math.random() * 3),
  };

  const games = {
    home: Math.floor(Math.random() * 7),
    away: Math.floor(Math.random() * 7),
  };

  const odds = 1.05 + Math.random() * 0.5;
  
  // Tennis filter: one player leads by 2+ games, odds 1.05-1.25
  const gameDiff = Math.abs(games.home - games.away);
  const meetsCondition = gameDiff >= 2 && odds >= 1.05 && odds <= 1.25;

  if (!meetsCondition && Math.random() > 0.3) return null;

  return {
    id: `tennis-${Math.random().toString(36).substr(2, 9)}`,
    sport: 'tennis',
    homeTeam: player1,
    awayTeam: player2,
    homeScore: sets.home,
    awayScore: sets.away,
    sets,
    games,
    odds: parseFloat(odds.toFixed(2)),
    sourceUrl: 'https://example.com/tennis',
  };
}

function generateHockeyMatch(): Match | null {
  const team1 = getRandomElement(hockeyTeams);
  let team2 = getRandomElement(hockeyTeams);
  while (team2 === team1) {
    team2 = getRandomElement(hockeyTeams);
  }

  const homeScore = Math.floor(Math.random() * 6);
  const awayScore = Math.floor(Math.random() * 6);
  const odds = 1.1 + Math.random() * 0.4;

  const period = Math.floor(Math.random() * 3) + 1;
  const minutes = Math.floor(Math.random() * 20);
  const seconds = Math.floor(Math.random() * 60);

  // Hockey filter: team leads by 2+ goals, odds < 1.35
  const goalDiff = Math.abs(homeScore - awayScore);
  const meetsCondition = goalDiff >= 2 && odds < 1.35;

  if (!meetsCondition && Math.random() > 0.3) return null;

  return {
    id: `hockey-${Math.random().toString(36).substr(2, 9)}`,
    sport: 'hockey',
    homeTeam: team1,
    awayTeam: team2,
    homeScore,
    awayScore,
    odds: parseFloat(odds.toFixed(2)),
    timeRemaining: `Period ${period} - ${minutes}:${seconds.toString().padStart(2, '0')}`,
    sourceUrl: 'https://example.com/hockey',
  };
}

function generateBasketballMatch(): Match | null {
  const team1 = getRandomElement(basketballTeams);
  let team2 = getRandomElement(basketballTeams);
  while (team2 === team1) {
    team2 = getRandomElement(basketballTeams);
  }

  const homeScore = 80 + Math.floor(Math.random() * 40);
  const awayScore = 80 + Math.floor(Math.random() * 40);
  const odds = 1.1 + Math.random() * 0.5;

  const minutesLeft = Math.floor(Math.random() * 8);
  const seconds = Math.floor(Math.random() * 60);

  // Basketball filter: < 5 minutes remain, lead >= 10 points
  const scoreDiff = Math.abs(homeScore - awayScore);
  const meetsCondition = minutesLeft < 5 && scoreDiff >= 10;

  if (!meetsCondition && Math.random() > 0.3) return null;

  return {
    id: `basketball-${Math.random().toString(36).substr(2, 9)}`,
    sport: 'basketball',
    homeTeam: team1,
    awayTeam: team2,
    homeScore,
    awayScore,
    odds: parseFloat(odds.toFixed(2)),
    timeRemaining: `${minutesLeft}:${seconds.toString().padStart(2, '0')} Q4`,
    sourceUrl: 'https://example.com/basketball',
  };
}

function generateVolleyballMatch(): Match | null {
  const team1 = getRandomElement(volleyballTeams);
  let team2 = getRandomElement(volleyballTeams);
  while (team2 === team1) {
    team2 = getRandomElement(volleyballTeams);
  }

  const homeScore = 15 + Math.floor(Math.random() * 15);
  const awayScore = 15 + Math.floor(Math.random() * 15);
  const odds = 1.05 + Math.random() * 0.4;

  const sets = {
    home: Math.floor(Math.random() * 3),
    away: Math.floor(Math.random() * 3),
  };

  // Volleyball filter: team leads by 3+ points, score >= 18
  const pointDiff = Math.abs(homeScore - awayScore);
  const maxScore = Math.max(homeScore, awayScore);
  const meetsCondition = pointDiff >= 3 && maxScore >= 18;

  if (!meetsCondition && Math.random() > 0.3) return null;

  return {
    id: `volleyball-${Math.random().toString(36).substr(2, 9)}`,
    sport: 'volleyball',
    homeTeam: team1,
    awayTeam: team2,
    homeScore,
    awayScore,
    sets,
    odds: parseFloat(odds.toFixed(2)),
    timeRemaining: `Set ${sets.home + sets.away + 1}`,
    sourceUrl: 'https://example.com/volleyball',
  };
}

export function generateMockMatches(): Match[] {
  const matches: Match[] = [];

  // Generate 2-4 matches per sport
  for (let i = 0; i < 3; i++) {
    const tennis = generateTennisMatch();
    if (tennis) matches.push(tennis);

    const hockey = generateHockeyMatch();
    if (hockey) matches.push(hockey);

    const basketball = generateBasketballMatch();
    if (basketball) matches.push(basketball);

    const volleyball = generateVolleyballMatch();
    if (volleyball) matches.push(volleyball);
  }

  return matches;
}

export function filterMatches(matches: Match[]): Match[] {
  return matches.filter(match => {
    switch (match.sport) {
      case 'tennis':
        if (!match.games) return false;
        const gameDiff = Math.abs(match.games.home - match.games.away);
        return gameDiff >= 2 && match.odds >= 1.05 && match.odds <= 1.25;

      case 'hockey':
        const goalDiff = Math.abs(match.homeScore - match.awayScore);
        return goalDiff >= 2 && match.odds < 1.35;

      case 'basketball':
        if (!match.timeRemaining) return false;
        const minutesMatch = match.timeRemaining.match(/(\d+):/);
        const minutesLeft = minutesMatch ? parseInt(minutesMatch[1]) : 10;
        const scoreDiff = Math.abs(match.homeScore - match.awayScore);
        return minutesLeft < 5 && scoreDiff >= 10;

      case 'volleyball':
        const pointDiff = Math.abs(match.homeScore - match.awayScore);
        const maxScore = Math.max(match.homeScore, match.awayScore);
        return pointDiff >= 3 && maxScore >= 18;

      default:
        return false;
    }
  });
}

export const sportColors = {
  tennis: { bg: 'bg-green-50', border: 'border-green-200', text: 'text-green-700', badge: 'bg-green-100' },
  hockey: { bg: 'bg-blue-50', border: 'border-blue-200', text: 'text-blue-700', badge: 'bg-blue-100' },
  basketball: { bg: 'bg-orange-50', border: 'border-orange-200', text: 'text-orange-700', badge: 'bg-orange-100' },
  volleyball: { bg: 'bg-purple-50', border: 'border-purple-200', text: 'text-purple-700', badge: 'bg-purple-100' },
};
