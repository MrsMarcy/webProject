//the delete button portion 
$('#main').on('click', '.delete', function(){
    $(this).closest('.comment').remove();
});
//the edit button portion
$('#main').on('click','.edit', function(){
    //makes the edit section visible
    let close = $(this).closest('.normal');
    let closer = $(close).children('.container');
    $(closer).children().toggleClass('noDisplay');

    //sets the value as whatever the comment is
    let flex1 = $(close).children('.flex').children('.comment3');
    let flex = $(close).children('.flex').children('.comment3').text();
    let button = $(closer).children().children('.comment1');
    $(button).val(flex);
    
    //the submit button to update the comment
    $(closer).children().children('.submit1').off().on('click', function(){
        let submitNew = button.val();
        if (submitNew === ''){
            alert('please add something')
        }else{
            $(flex1).text(submitNew);
            $(closer).children().toggleClass('noDisplay');
        };
    });
});
//the comment thing and submit button
$('#submit').on('click', function(){
    let name = $('#name').val();
    let comment = $('#comment2').val();
    let output = $('#output');

    if (name === ''){
        output.text('Please enter a name!')
    }else if (comment === ''){
        output.text('Please enter a comment!')
    }else{
        output.text('');

        $('#main').prepend(`
            <div class="comment">
                <div class="image">
                    <img src="default.png">
                </div>
                <div class="normal">
                    <div class="flex"> 
                        <div class="flex2"> 
                            <div class="link">
                                <div class="edit">Edit</div>
                                <div class="delete">Delete</div>
                            </div>
                            <h4>${name}</h4>
                        </div>
                        <p class="comment3">${comment}</p>
                    </div>
                    <div class="container">
                        <div class="noDisplay">
                            <label for="comment1" ></label>
                            <input type="text" class="comment1" name="comment1">
                            <input type="submit" class="submit1" value="Submit">
                        </div>    
                    </div>
                </div>
            </div>
        `);
    };
});
