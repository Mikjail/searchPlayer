export interface PlayerBasicDetails {
  active: boolean;
  id: string;
  'profile-id': string;
}

export interface PlayerAdvancedDetails {
  id: string;
  profile: Profile;
  stats: Stats;
}

export interface Profile {
  age: string;
  role: string;
  team: string;
  picture: string;
}

export interface Stats {
  blocks: string;
  goals: string;
  totalTackles: string;
  interceptions: string;
  tacklesWon: string;
  passingAccuracy: string;
  clearances: string;
  totalCrosses: string;
  aerialDuelsWon: string;
  minutesPlayed: string;
  minutesPerGoal: string;
  headedGoals: string;
  foulsConceded: string;
  totalPasses: string;
  totalShots: string;
  otherGoals: string;
  duelsWon: string;
  shotsOnTarget: string;
  leftFootGoals: string;
  rightFootGoals: string;
  starts: string;
  goalsFromInsideBox: string;
  substitutionOff: string;
  foulsWon: string;
  assists: string;
  gamesPlayed: string;
  substitutionOn: string;
  successfulCrosses: string;
  goalsFromOutsideBox: string;
  yellowCards: string;
  redCards: string;
}
