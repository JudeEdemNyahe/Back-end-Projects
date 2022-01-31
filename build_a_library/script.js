class Media {
    constructor(title) {
        this._title = title;
        this._ratings = [];
        this.isCheckedOut = false;
    }

    get Title() {
        return this._title;
    }

    get isCheckedOut() {
        return this._isCheckedOut;
    }
    get ratings() {
        return this._ratings;
    }
    toggleCheckOutStatus() {
        this._isCheckedOut = !this._isCheckedOut;
    }
    addRating(value) {
        for (let i = 0; i < value.length; i++) {
            this._ratings.push(value[i]);
        }
    }
    getAverageRating() {

        let ratingSum = this._ratings.reduce(function(previousValue, currentValue) {
            return previousValue + currentValue;
        });
        return ratingSum / this._ratings.length;
    }

    set isCheckedOut(newValue) {
        this._isCheckedOut = newValue;
    }




}

class Book extends Media {
    constructor(author, title, pages) {
        super(title);
        this._author = author;
        this._pages = pages;
    }
    get pages() {
        return this._pages
    }
    get author() {
        return this._author;
    }

}

class Movie extends Media {
    constructor(director, title, runTime) {
        super(title);
        this._director = director;
        this._runtime = runTime;

    }
    get director() {
        return this._director;
    }
    get runTime() {
        return this._runTime
    }
};
class Cd extends Media {
    constructor(title, artist) {
        super(title);
        this._artist = artist;
        this._songs = ['blank Space', 'Nights', 'sisa', 'Party Nights', 'Love yourself', 'Success story', 'Hommie', 'Holy Father'];

    };
    get artist() {
        return this._artist;
    };
    get songs() {
        return this._songs;
    }

    addSongs(newSong) {
        for (let i = 0; i < newSong.length; i++) {
            this._songs.push(newSong[i])
        }
    }
    shuffle() {
        const shuffledArray = this._songs.sort((a, b) => 0.5 - Math.random())
        return shuffledArray;
    }
}


const historyOfEverything = new Book('Bill Bryson', 'A Short History of Nearly Everything', '544')

historyOfEverything.toggleCheckOutStatus();
console.log(historyOfEverything.isCheckedOut)
historyOfEverything.addRating([4, 5, 5])
console.log(historyOfEverything.getAverageRating())
    //
const speed = new Movie('Jan de Bont', 'Speed', 116);
speed.toggleCheckOutStatus()
console.log(historyOfEverything.isCheckedOut);
speed.addRating([1, 1, 5])
console.log(speed.getAverageRating())
    //
const playList = new Cd('Stereo');
playList.addSongs(['Opera'])
console.log(playList.shuffle())