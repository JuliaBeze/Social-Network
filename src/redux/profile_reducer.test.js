import profileReducer, {deletePost, onAddPostActionCreator} from "./profile_reducer";


//передаем action, и получим какой-то стейт, проверим,что это стейт такой же,какой и одидаем получить;

const state = {
    posts: [
        {id: 1, message: 'Hi,how are you?', likesCount: 5},
        {id: 2, message: 'It`s my first project', likesCount: 3},
        {id: 2, message: 'Bye', likesCount: 3}
    ],
};

it('message of new post should be correct', () => {
    //1.стартовые данные
    let action = onAddPostActionCreator("it-incubator")

    //2.делаем action
    let newState =  profileReducer(state,action);

    //3.проверяем ожидание
   expect(newState.posts.length).toBe(4);
});



it('new post should be added', () => {
    //1.стартовые данные
    let action = onAddPostActionCreator("it-incubator")

    //2.делаем action
    let newState =  profileReducer(state,action);

    //3.проверяем ожидание
    expect(newState.posts[3].message).toBe("it-incubator");
});
//логика,которой нет
it('after deleting length of message should be decrement', () => {
    //1.стартовые данные
    let action = deletePost(1)

    //2.делаем action
    let newState =  profileReducer(state,action);

    //3.проверяем ожидание
    expect(newState.posts.length).toBe(2);
});

it('after deleting length  should not be decrement if id is incorrect', () => {
    //1.стартовые данные
    let action = deletePost(1000)

    //2.делаем action
    let newState =  profileReducer(state,action);

    //3.проверяем ожидание
    expect(newState.posts.length).toBe(3);
});
