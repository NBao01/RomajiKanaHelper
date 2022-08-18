import random
import os
import msvcrt

romaji_kana_table = {
    'a': {'hebon_romaji': 'a', 'kunrei_romaji': 'a', 'hiragana': 'あ', 'katakana': 'ア'},
    'i': {'hebon_romaji': 'i', 'kunrei_romaji': 'i', 'hiragana': 'い', 'katakana': 'イ'},
    'u': {'hebon_romaji': 'u', 'kunrei_romaji': 'u', 'hiragana': 'う', 'katakana': 'ウ'},
    'e': {'hebon_romaji': 'e', 'kunrei_romaji': 'e', 'hiragana': 'え', 'katakana': 'エ'},
    'o': {'hebon_romaji': 'o', 'kunrei_romaji': 'o', 'hiragana': 'お', 'katakana': 'オ'},
    'ka': {'hebon_romaji': 'ka', 'kunrei_romaji': 'ka', 'hiragana': 'か', 'katakana': 'カ'},
    'ki': {'hebon_romaji': 'ki', 'kunrei_romaji': 'ki', 'hiragana': 'き', 'katakana': 'キ'},
    'ku': {'hebon_romaji': 'ku', 'kunrei_romaji': 'ku', 'hiragana': 'く', 'katakana': 'ク'},
    'ke': {'hebon_romaji': 'ke', 'kunrei_romaji': 'ke', 'hiragana': 'け', 'katakana': 'ケ'},
    'ko': {'hebon_romaji': 'ko', 'kunrei_romaji': 'ko', 'hiragana': 'こ', 'katakana': 'コ'},
    'sa': {'hebon_romaji': 'sa', 'kunrei_romaji': 'sa', 'hiragana': 'さ', 'katakana': 'サ'},
    'si': {'hebon_romaji': 'shi', 'kunrei_romaji': 'si', 'hiragana': 'し', 'katakana': 'シ'},
    'su': {'hebon_romaji': 'su', 'kunrei_romaji': 'su', 'hiragana': 'す', 'katakana': 'ス'},
    'se': {'hebon_romaji': 'se', 'kunrei_romaji': 'se', 'hiragana': 'せ', 'katakana': 'セ'},
    'so': {'hebon_romaji': 'so', 'kunrei_romaji': 'so', 'hiragana': 'そ', 'katakana': 'ソ'},
    'ta': {'hebon_romaji': 'ta', 'kunrei_romaji': 'ta', 'hiragana': 'た', 'katakana': 'タ'},
    'ti': {'hebon_romaji': 'chi', 'kunrei_romaji': 'ti', 'hiragana': 'ち', 'katakana': 'チ'},
    'tu': {'hebon_romaji': 'tsu', 'kunrei_romaji': 'tu', 'hiragana': 'つ', 'katakana': 'ツ'},
    'te': {'hebon_romaji': 'te', 'kunrei_romaji': 'te', 'hiragana': 'て', 'katakana': 'テ'},
    'to': {'hebon_romaji': 'to', 'kunrei_romaji': 'to', 'hiragana': 'と', 'katakana': 'ト'},
    'na': {'hebon_romaji': 'na', 'kunrei_romaji': 'na', 'hiragana': 'な', 'katakana': 'ナ'},
    'ni': {'hebon_romaji': 'ni', 'kunrei_romaji': 'ni', 'hiragana': 'に', 'katakana': 'ニ'},
    'nu': {'hebon_romaji': 'nu', 'kunrei_romaji': 'nu', 'hiragana': 'ぬ', 'katakana': 'ヌ'},
    'ne': {'hebon_romaji': 'ne', 'kunrei_romaji': 'ne', 'hiragana': 'ね', 'katakana': 'ネ'},
    'no': {'hebon_romaji': 'no', 'kunrei_romaji': 'no', 'hiragana': 'の', 'katakana': 'ノ'},
    'ha': {'hebon_romaji': 'ha', 'kunrei_romaji': 'ha', 'hiragana': 'は', 'katakana': 'ハ'},
    'hi': {'hebon_romaji': 'hi', 'kunrei_romaji': 'hi', 'hiragana': 'ひ', 'katakana': 'ヒ'},
    'hu': {'hebon_romaji': 'fu', 'kunrei_romaji': 'hu', 'hiragana': 'ふ', 'katakana': 'フ'},
    'he': {'hebon_romaji': 'he', 'kunrei_romaji': 'he', 'hiragana': 'へ', 'katakana': 'ヘ'},
    'ho': {'hebon_romaji': 'ho', 'kunrei_romaji': 'ho', 'hiragana': 'ほ', 'katakana': 'ホ'},
    'ma': {'hebon_romaji': 'ma', 'kunrei_romaji': 'ma', 'hiragana': 'ま', 'katakana': 'マ'},
    'mi': {'hebon_romaji': 'mi', 'kunrei_romaji': 'mi', 'hiragana': 'み', 'katakana': 'ミ'},
    'mu': {'hebon_romaji': 'mu', 'kunrei_romaji': 'mu', 'hiragana': 'む', 'katakana': 'ム'},
    'me': {'hebon_romaji': 'me', 'kunrei_romaji': 'me', 'hiragana': 'め', 'katakana': 'メ'},
    'mo': {'hebon_romaji': 'mo', 'kunrei_romaji': 'mo', 'hiragana': 'も', 'katakana': 'モ'},
    'ya': {'hebon_romaji': 'ya', 'kunrei_romaji': 'ya', 'hiragana': 'や', 'katakana': 'ヤ'},
    # 'yi': {'hebon_romaji': 'yi', 'kunrei_romaji': 'yi', 'hiragana': '', 'katakana': ''},
    'yu': {'hebon_romaji': 'yu', 'kunrei_romaji': 'yu', 'hiragana': 'ゆ', 'katakana': 'ユ'},
    # 'ye': {'hebon_romaji': 'ye', 'kunrei_romaji': 'ye', 'hiragana': '', 'katakana': ''},
    'yo': {'hebon_romaji': 'yo', 'kunrei_romaji': 'yo', 'hiragana': 'よ', 'katakana': 'ヨ'},
    'ra': {'hebon_romaji': 'ra', 'kunrei_romaji': 'ra', 'hiragana': 'ら', 'katakana': 'ラ'},
    'ri': {'hebon_romaji': 'ri', 'kunrei_romaji': 'ri', 'hiragana': 'り', 'katakana': 'リ'},
    'ru': {'hebon_romaji': 'ru', 'kunrei_romaji': 'ru', 'hiragana': 'る', 'katakana': 'ル'},
    're': {'hebon_romaji': 're', 'kunrei_romaji': 're', 'hiragana': 'れ', 'katakana': 'レ'},
    'ro': {'hebon_romaji': 'ro', 'kunrei_romaji': 'ro', 'hiragana': 'ろ', 'katakana': 'ロ'},
    'wa': {'hebon_romaji': 'wa', 'kunrei_romaji': 'wa', 'hiragana': 'わ', 'katakana': 'ワ'},
    # 'wi': {'hebon_romaji': 'wi', 'kunrei_romaji': 'wi', 'hiragana': 'ゐ', 'katakana': 'ヰ'},
    # 'wu': {'hebon_romaji': 'wu', 'kunrei_romaji': 'wu', 'hiragana': '', 'katakana': ''},
    # 'we': {'hebon_romaji': 'we', 'kunrei_romaji': 'we', 'hiragana': 'ゑ', 'katakana': 'ヱ'},
    'wo': {'hebon_romaji': 'wo', 'kunrei_romaji': 'wo', 'hiragana': 'を', 'katakana': 'ヲ'},
    'n': {'hebon_romaji': 'n', 'kunrei_romaji': 'n', 'hiragana': 'ん', 'katakana': 'ン'},
}


if __name__ == '__main__':
    romaji_type = 'hebon_romaji'
    first_display_romaji, first_display_hiragana, first_display_katakana = True, False, False

    display_mode = 0
    if first_display_romaji:
        display_mode |= 1
    elif first_display_hiragana:
        display_mode |= 2
    elif first_display_katakana:
        display_mode |= 4

    random_keys = random.sample(romaji_kana_table.keys(), len(romaji_kana_table))

    os.system('cls')

    for key in random_keys:
        print('Press Q to Exit, Press Enter or Space to Continue\n')
        for stage in (0, 7):
            print('\033[0;{};40m'.format(31 if stage == 0 else 32), end='')
            if (display_mode ^ stage) & 1 != 0:
                print('romaji: {}'.format(romaji_kana_table[key][romaji_type]))
            if (display_mode ^ stage) & 2 != 0:
                print('hiragana: {}'.format(romaji_kana_table[key]['hiragana']))
            if (display_mode ^ stage) & 4 != 0:
                print('katakana: {}'.format(romaji_kana_table[key]['katakana']))
            print('\033[0m', end='')
            while True:
                ch = msvcrt.getch()
                if ord(ch) in [ord('q'), ord('Q')]:
                    exit(0)
                elif ord(ch) in [ord('\r'), ord('\n'), ord(' ')]:
                    break
        os.system('cls')
