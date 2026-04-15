/**
 * Shared types for La Base game
 */

export type Suit = 'oros' | 'copas' | 'espadas' | 'bastos';
export type CardValue = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 10 | 11 | 12;

export type Card = {
  suit: Suit;
  value: CardValue;
};

export type GameStructure = 'clasica' | 'alternativa' | 'postpandemia' | 'custom';

export type AcePowers = {
  espadas: boolean;  // As de Espadas kills Ancho de Bastos
  copas: boolean;    // As de Copas changes direction
  oros: boolean;     // As de Oros chooses next Mano
};

export type Team = 'nosotros' | 'ellos';

export type Player = {
  id: string;
  name: string;
  team: Team;
  hand: Card[];
  isMano: boolean;
  reconnectToken: string;
  isAuthenticated: boolean;
  userId?: string;
};

export type Bid = {
  team: Team;
  value: number;
  isKamikaze: boolean;
};

export type PlayedCard = {
  playerId: string;
  card: Card;
  order: number;
};

export type GamePhase =
  | 'lobby'
  | 'config'
  | 'round_setup'
  | 'bidding'
  | 'playing'
  | 'base_resolution'
  | 'round_scoring'
  | 'game_over';

export type GameState = {
  phase: GamePhase;
  structure: GameStructure;
  structureSequence: number[];
  roundIndex: number;
  acePowers: AcePowers;
  scores: Record<Team, number>;
  bids: Bid[];
  playDirection: 'antihorario' | 'horario';
  currentManoPlayerId: string;
  currentBaseCards: PlayedCard[];
  basesWon: Record<Team, number>;
  kamikazeTeam: Team | null;
};

export type GameConfig = {
  structure: GameStructure;
  customStructure?: number[];
  acePowers: AcePowers;
  playerCount: 4 | 6 | 8;
};
