export let trim = (item:object)=>{
    return {
        discount : item['discount'],
        extra: {
            exterior: item['extra'].exterior,
            linkId: item['extra'].linkId,
            offerId: item['extra'].offerId,
            category: item['extra'].category,
            stickers: item['extra'].stickers,
            tradeLock: item['extra'].tradeLock,
            floatValue: item['extra'].floatValue
        },
        price:{
            USD: item.price['USD']
        },
        title: item.title,
        image: item.image

    }
}