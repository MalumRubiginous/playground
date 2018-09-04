function TagInput (listEl, inputEl) {
    if (!String.prototype.trim) {
        String.prototype.trim = function () {
            return this.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, '');
        };
    }

    this.tagList = [];
    this.listEl = listEl;
    this.inputEl = inputEl;

    // 事件綁定
    this.listEl.addEventListener('click', () => {
          this.inputEl.focus();
    });

    this.inputEl.addEventListener('keydown', (e) => {
        if (e.keyCode === 13 && e.target.value) {
            this.addTag(e.target.value);
            e.target.value = '';
        }
    });

    // 自定義事件
    this.remindDupulicateEvent = new Event('remindDupulicate');
}

TagInput.prototype.getList = function () {
    return tagList;
};

TagInput.prototype.deleteTag = function (removeTag) {
    this.tagList = this.tagList
        .filter(function(tag) { return tag !== removeTag; })
        .map(function(tag) { return tag; });
};

TagInput.prototype.addTag = function (newTag) {
    newTag = newTag.trim();

    if (!newTag) {
        return false;
    }

    const isDupulicate = this.tagList.filter((tag) => (tag === newTag)).length;

    if (isDupulicate) {
        const index = this.tagList.findIndex((tag) => (tag === newTag));
        this.listEl.childNodes[index].dispatchEvent(this.remindDupulicateEvent);
        return false;
    }

    this.createTagElement(newTag);
    this.tagList.push(newTag);
};

TagInput.prototype.createTagElement = function (tag) {
    const span = document.createElement('span');
    const tagText = document.createTextNode(tag);
    span.appendChild(tagText);

    const crossBtn = document.createElement('span');
    const crossText = document.createTextNode('\u2573');
    crossBtn.setAttribute('class', 'delete-tag')
    crossBtn.appendChild(crossText);
    crossBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        this.deleteTag(tag);
        this.listEl.removeChild(e.target.parentNode);
    });

    const li = document.createElement('li');
    li.setAttribute('class', 'tag-list-item');
    li.appendChild(span);
    li.appendChild(crossBtn);
    li.addEventListener('remindDupulicate', (e) => {
        e.target.classList.add('dupulicate');
        setTimeout(() => {
            e.target.classList.remove('dupulicate');
        }, 250);
    }, false);

    const inserIndex = this.tagList.length;
    const beacon = this.listEl.childNodes[inserIndex];
    this.listEl.insertBefore(li, beacon);
};
