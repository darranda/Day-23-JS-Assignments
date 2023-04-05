
let emailData ={
    name: 'Gmail',
    mailboxes: ['inbox',
                'sent',
                'drafts',
                'spam',
                'trash',
    ],
    emails: [{ sender: 'Darranda@gmail.com', recipient: 'Lisa@gmail.com', sentMessage: 'It was good to hear from you'},
             { sender: 'Paula@gmail.com', recipient: 'Chris@gmail.com', sentMessage: 'Were you able to complete the assignment?'}
    ],
    contacts: [{ firstName:'Kim',lastName: 'Blake'},
               { firstName:'Michele', lastName:'Jackson'},
               { firstName:'Eriq',lastName:'Todd'},
               { firstName:'Abby', lastName:'Franklin'}
    ],
}
// Get a list of mailbox names
emailData.mailboxes

// Get a list of emails
emailData.emails
console.log(emailData.emails)

//Get the text of the second email in the visible list
emailData.emails.sentMessage


// Mark an email as sent
let email = {
    sender:[
        'Darranda@gmail.com', 
    ],
    recipient: [
        'Lisa@gmail.com',
    ],
    lastMessage: [
        'It was good to hear from you',
    ],
    sent: true
}

// Add a draft email to the drafts mailbox
emailData.mailboxes.drafts = "Yes, I have complete the assignment"

