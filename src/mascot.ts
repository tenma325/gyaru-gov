// ドット絵ギャル「ガル子」スプライト（24×32）。設計ファンアウト由来。
// a11y批評の修正を反映: 瞳 P を濃く(#463A7A)、髪陰 J を濃いラベンダー(#9B86D8)に。
// `.`=透明、英字=palette のキー。

export const MASCOT_W = 24
export const MASCOT_H = 32

export const mascotPalette: Record<string, string> = {
  O: '#2e2a36', // 輪郭線（やわ墨）
  S: '#fbe3d6', // 肌
  B: '#ff9fb2', // ほお紅
  L: '#f08ca0', // 口元
  K: '#f5d98b', // 盛り髪メイン（レモン金）
  J: '#9b86d8', // 髪の陰（濃いラベンダー＝コントラスト改善）
  E: '#fbf6ee', // 白目・ハイライト
  P: '#463a7a', // 瞳（濃ラベンダー＝肌とのコントラスト改善）
  U: '#a8d8f0', // 制服（スカイ）
  M: '#9fe3c5', // 制服差し色（ミント）
  A: '#ff9fb2', // サッシュ（コーラル）
  G: '#f5d98b', // ピアス・金具（レモン金）
}

export const mascotSketch: string[] = [
  '........OOOOOOOO........',
  '......OOKKKKKKKKOO......',
  '.....OKKKKKKKKKKKKO.....',
  '....OKKJKKKKKKKKJKKO....',
  '...OKKJJKKKKKKKKJJKKO...',
  '...OKKKJJKKKKKKJJKKKO...',
  '...OKKKKOOOOOOOOKKKKO...',
  '..OKKKOSSSSSSSSSSOKKKO..',
  '..OKKOSSSSSSSSSSSSOKKO..',
  '..OKKOSSSSSSSSSSSSOKKO..',
  '.GOKKOSESSSSSSSSESOKKOG.',
  'GGOKKOSEPSSSSSSPESOKKOGG',
  'GGOKKOSEPSSSSSSPESOKKOGG',
  '.GOKKOSSSSSSSSSSSSOKKOG.',
  '..OKKOSBSSSLLSSBSSOKKO..',
  '..OKKOSSSSLLLLSSSSOKKO..',
  '...OKOSSSSSSSSSSSSOKO...',
  '....OOSSSSSSSSSSSSOO....',
  '.....OSSSOOOOOOSSSO.....',
  '....OUUUOAAAAAAOUUUO....',
  '...OUUUUOAAAAAAOUUUUO...',
  '...OUUUUOAAAAAAOUUUUO...',
  '..OUUUUUGAAAAAAGUUUUUO..',
  '..OUUUUUOAAAAAAOUUUUUO..',
  '..OUMMMUOAAAAAAOUMMMUO..',
  '..OUMMMUOOOOOOOOUMMMUO..',
  '...OSSO..OUUUUO..OSSO...',
  '...OSSO..OUUUUO..OSSO...',
  '....OO...OMMMMO...OO....',
  '.........OSSSSO.........',
  '.........OSSOSO.........',
  '.........OOOOOO.........',
]

// まばたきフレーム: 目（E/P）を肌色で塗り、閉じ目の線を入れる
export const blinkToSkin: [number, number][] = [
  [7, 10], [16, 10],
  [7, 11], [8, 11], [15, 11], [16, 11],
  [7, 12], [8, 12], [15, 12], [16, 12],
]
export const blinkLine: [number, number][] = [
  [7, 12], [8, 12], [15, 12], [16, 12],
]

// バウンス頂点のキラ（透明セルに白の十字）
export const sparkleCells: [number, number][] = [
  [19, 2], [18, 3], [20, 3], [19, 4],
]
